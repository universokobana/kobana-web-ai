/**
 * Combines the ReadMe documentation checked out under `content/api/docs` with
 * the generated endpoint reference into the single `views/pt-BR/api.md` page.
 *
 * Port of the former `bin/update-api-docs`.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { glob, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import { CONTENT_DIR, VIEWS_DIR, anchorSlug } from './lib/paths';

const API_CONTENT_DIR = path.join(CONTENT_DIR, 'api');
const API_DOCS_DIR = path.join(API_CONTENT_DIR, 'docs');
const API_REFERENCE_FILE = path.join(CONTENT_DIR, 'api_reference.md');
const IGNORE_FILE = path.join(CONTENT_DIR, 'ignore_docs.txt');
const OUTPUT_FILE = path.join(VIEWS_DIR, 'pt-BR', 'api.md');
const DOCS_REPOSITORY = 'git@github.com:universokobana/kobana-developers-doc-readme.git';

interface IndexEntry {
  number: number;
  title: string;
  anchor: string;
}

function run(command: string, args: string[]): boolean {
  try {
    execFileSync(command, args, { stdio: 'inherit' });
    return true;
  } catch {
    return false;
  }
}

function syncDocsRepository(): void {
  console.log('⏳ Updating content/api directory...');

  if (existsSync(API_CONTENT_DIR)) {
    const ok = run('git', ['-C', API_CONTENT_DIR, 'pull', '--rebase']);
    console.log(
      ok
        ? '✅ Successfully updated content/api'
        : '⚠️  Warning: git pull --rebase failed for content/api',
    );
    return;
  }

  console.log('📥 content/api directory not found. Cloning repository...');
  if (!run('git', ['clone', DOCS_REPOSITORY, API_CONTENT_DIR])) {
    console.error(`🚨 ERROR: Failed to clone repository to ${API_CONTENT_DIR}`);
    process.exit(1);
  }
  console.log('✅ Successfully cloned content/api repository');
}

async function loadIgnorePatterns(): Promise<string[]> {
  if (!existsSync(IGNORE_FILE)) {
    console.log(`No ignore file found at ${IGNORE_FILE}`);
    return [];
  }

  const patterns = (await readFile(IGNORE_FILE, 'utf8'))
    .split('\n')
    .map((line) => line.trim().toLowerCase())
    .filter(Boolean);

  console.log(`Loaded ${patterns.length} ignore patterns: ${patterns.join(', ')}`);
  return patterns;
}

async function readOrderFile(file: string): Promise<string[] | null> {
  if (!existsSync(file)) return null;

  try {
    return (parseYaml(await readFile(file, 'utf8')) as string[] | null) ?? [];
  } catch (error) {
    console.log(`Warning: Failed to parse ${file}: ${(error as Error).message}`);
    return null;
  }
}

/**
 * Orders files by the `_order.yaml` manifests ReadMe keeps in each directory:
 * the root file lists directories, each directory file lists its pages. Anything
 * not mentioned falls back to alphabetical order, at the end.
 */
async function sortByOrderFiles(files: string[]): Promise<string[]> {
  const grouped = new Map<string, string[]>();
  for (const file of files) {
    const dir = path.dirname(file);
    grouped.set(dir, [...(grouped.get(dir) ?? []), file]);
  }

  const sorted: string[] = [];
  const rootOrder = await readOrderFile(path.join(API_DOCS_DIR, '_order.yaml'));

  for (const dirName of rootOrder ?? []) {
    const dirPath = path.join(API_DOCS_DIR, dirName);
    const dirFiles = grouped.get(dirPath);
    if (!dirFiles) continue;

    const subOrder = await readOrderFile(path.join(dirPath, '_order.yaml'));
    if (subOrder) {
      const ordered = subOrder
        .map((base) => dirFiles.find((file) => path.basename(file, '.md') === base))
        .filter((file): file is string => Boolean(file));
      const remaining = dirFiles.filter((file) => !ordered.includes(file)).sort();
      sorted.push(...ordered, ...remaining);
    } else {
      sorted.push(...[...dirFiles].sort());
    }

    grouped.delete(dirPath);
  }

  for (const dirFiles of grouped.values()) sorted.push(...[...dirFiles].sort());

  return sorted;
}

/** Shifts every heading down two levels so pages nest under the page title. */
function indentHeadings(content: string): string {
  return content.replace(/^(#+)/gm, '##$1');
}

async function renderDocs(combined: string[], index: IndexEntry[]): Promise<{ hidden: number }> {
  if (!existsSync(API_DOCS_DIR)) {
    console.error(`Error: ${API_DOCS_DIR} directory not found`);
    process.exit(1);
  }

  const allFiles: string[] = [];
  for await (const file of glob(path.join(API_DOCS_DIR, '**', '*.md'))) allFiles.push(file);
  allFiles.sort();

  const ignorePatterns = await loadIgnorePatterns();
  const filtered = allFiles.filter((file) => {
    const relative = path.relative(API_DOCS_DIR, file).toLowerCase();
    return !ignorePatterns.some(
      (pattern) => relative.includes(pattern) || relative.startsWith(`${pattern}/`),
    );
  });

  console.log(
    `Found ${allFiles.length} API documentation files (ignoring ${allFiles.length - filtered.length} files)`,
  );

  if (filtered.length === 0) {
    console.log('No markdown files to process after applying ignore patterns');
    return { hidden: 0 };
  }

  const sorted = await sortByOrderFiles(filtered);
  console.log('Sorted files according to _order.yaml configuration');

  let hidden = 0;

  for (const file of sorted) {
    const relative = path.relative(API_DOCS_DIR, file);
    console.log(`⚙️  Processing: ${relative}`);

    const content = (await readFile(file, 'utf8')).trim();
    const frontmatter = /^---\n([\s\S]*?)\n---\n/.exec(content);

    if (!frontmatter) {
      combined.push(indentHeadings(content), '\n\n---\n\n');
      continue;
    }

    const yaml = frontmatter[1]!;

    if (/^hidden:\s*(.+)$/im.exec(yaml)?.[1]?.trim().toLowerCase() === 'true') {
      console.log(`⏭️  Skipping hidden file: ${relative}`);
      hidden += 1;
      continue;
    }

    const title = /^title:\s*(.+)$/im
      .exec(yaml)?.[1]
      ?.trim()
      .replace(/^['"]|['"]$/g, '');
    if (title) {
      index.push({ number: index.length + 1, title, anchor: anchorSlug(title) });
      combined.push(`## ${title}\n\n`);
    }

    combined.push(indentHeadings(content.replace(/^---\n[\s\S]*?\n---\n/, '').trim()));
    combined.push('\n\n---\n\n');
  }

  // Drop the separator trailing the last document.
  const last = combined[combined.length - 1];
  if (last?.endsWith('---\n\n')) {
    combined[combined.length - 1] = last.slice(0, -'---\n\n'.length);
  }

  return { hidden };
}

async function renderReference(combined: string[], index: IndexEntry[]): Promise<void> {
  if (!existsSync(API_REFERENCE_FILE)) {
    console.log(`Warning: ${API_REFERENCE_FILE} not found`);
    return;
  }

  console.log(`Reading reference from ${API_REFERENCE_FILE}`);
  const lines = (await readFile(API_REFERENCE_FILE, 'utf8')).trim().split(/(?<=\n)/);

  combined.push('\n---\n\n', '## API Reference\n\n');

  const processed: string[] = [];
  lines.forEach((line, idx) => {
    const section = /^### (.+)$/m.exec(line)?.[1]?.trim();
    if (section) {
      // Generic sections do not deserve an index entry.
      if (section !== 'Other') {
        index.push({
          number: index.length + 1,
          title: `API: ${section}`,
          anchor: anchorSlug(section),
        });
      }
      processed.push(line);
      return;
    }

    // The leading `## Endpoints` heading is replaced by `## API Reference`.
    if (idx === 0 && /^## (.+)$/m.test(line)) return;

    processed.push(line);
  });

  combined.push(processed.join(''), '\n\n');
}

async function main(): Promise<void> {
  syncDocsRepository();

  const combined: string[] = ['# Documentação da API da Kobana\n\n'];
  const index: IndexEntry[] = [];

  const { hidden } = await renderDocs(combined, index);
  await renderReference(combined, index);

  if (index.length > 0) {
    const toc = ['## Índice\n'];
    for (const entry of index) toc.push(`${entry.number}. [${entry.title}](#${entry.anchor})\n`);
    toc.push('\n---\n\n');
    combined.splice(1, 0, toc.join(''));
  }

  await writeFile(OUTPUT_FILE, combined.join(''));

  console.log(`\n✅ Done! API documentation generated successfully at: ${OUTPUT_FILE}`);
  console.log(`📈 Total size: ${statSync(OUTPUT_FILE).size} bytes`);
  if (index.length > 0) console.log(`📑 Generated index with ${index.length} sections`);
  if (hidden > 0) console.log(`🙈 Skipped ${hidden} hidden files`);
}

main().catch((error: Error) => {
  console.error(`🚨 ERROR: ${error.message}`);
  process.exit(1);
});
