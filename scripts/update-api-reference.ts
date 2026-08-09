/**
 * Downloads the Kobana OpenAPI spec and renders it as the markdown endpoint
 * reference consumed by `update-api-docs`.
 *
 * Port of the former `bin/update-api-reference`.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { CONTENT_DIR } from './lib/paths';

type Json = Record<string, any>;

const SWAGGER_URL =
  'https://raw.githubusercontent.com/universokobana/kobana-api-specs/refs/heads/main/swagger/all-versions/kobana-api-all-versions-openapi-3_1.json';
const SWAGGER_FILE = path.join(CONTENT_DIR, 'kobana-api-all-versions-openapi-3_1.json');
const OUTPUT_FILE = path.join(CONTENT_DIR, 'api_reference.md');

/** Keys of a path item that are not HTTP operations. */
const NON_OPERATION_KEYS = ['parameters', 'servers', 'summary', 'description'];

/** Ruby truthiness: only `nil` and `false` are falsy — `0` and `""` are not. */
function truthy(value: unknown): boolean {
  return value !== undefined && value !== null && value !== false;
}

/**
 * A spec number written with a decimal point. JavaScript collapses `150.0` to
 * `150`, which would silently reformat every monetary example in the output, so
 * the distinction is carried through to serialisation.
 */
class FloatLiteral {
  constructor(readonly value: number) {}
  valueOf(): number {
    return this.value;
  }
}

function asFloat(value: unknown): FloatLiteral {
  return new FloatLiteral(Number(value));
}

/** Keeps `Math.min` results floats only when the spec value already was one. */
function preserveFloat(source: unknown, result: number): number | FloatLiteral {
  return source instanceof FloatLiteral ? new FloatLiteral(result) : result;
}

function parseSpec(text: string): Json {
  return JSON.parse(text, (_key, value, context?: { source?: string }) =>
    typeof value === 'number' && context?.source && /[.eE]/.test(context.source)
      ? new FloatLiteral(value)
      : value,
  );
}

/** Reproduces `JSON.pretty_generate`, including Ruby's `Float#to_s` output. */
function pretty(value: unknown, indent = 0): string {
  const pad = ' '.repeat(indent);
  const inner = ' '.repeat(indent + 2);

  if (value instanceof FloatLiteral) {
    return Number.isInteger(value.value) ? value.value.toFixed(1) : String(value.value);
  }
  if (value === null || value === undefined) return 'null';
  if (typeof value !== 'object') return JSON.stringify(value) ?? 'null';

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map((item) => inner + pretty(item, indent + 2));
    return `[\n${items.join(',\n')}\n${pad}]`;
  }

  const entries = Object.entries(value);
  if (entries.length === 0) return '{}';
  const items = entries.map(
    ([key, item]) => `${inner}${JSON.stringify(key)}: ${pretty(item, indent + 2)}`,
  );
  return `{\n${items.join(',\n')}\n${pad}}`;
}

function dig(document: Json, pointer: string): Json | undefined {
  return pointer
    .replace(/^#\//, '')
    .split('/')
    .reduce<any>((node, key) => (node == null ? undefined : node[key]), document);
}

/** Builds a representative example payload for a schema, following `$ref`s. */
function buildExample(schema: Json | undefined, swagger: Json, depth = 0): unknown {
  if (!schema) return null;
  if (depth > 5) return '...'; // prevent infinite recursion

  if (schema.$ref) {
    const referenced = dig(swagger, schema.$ref);
    if (referenced) return buildExample(referenced, swagger, depth + 1);
  }

  // OpenAPI 3.1 allows `type` to be an array (e.g. ["string", "null"]).
  // Normalize to the first non-null type.
  const type: string | undefined = Array.isArray(schema.type)
    ? (schema.type.find((entry: string) => entry !== 'null') ?? 'null')
    : schema.type;

  switch (type) {
    case 'object': {
      if (schema.properties) {
        const example: Json = {};
        for (const [name, property] of Object.entries<Json>(schema.properties)) {
          example[name] = buildExample(property, swagger, depth + 1);
        }
        return example;
      }
      if (schema.additionalProperties) {
        return {
          key1: buildExample(schema.additionalProperties, swagger, depth + 1),
          key2: buildExample(schema.additionalProperties, swagger, depth + 1),
        };
      }
      return {};
    }

    case 'array': {
      if (!schema.items) return [];
      // Show 2 items in array examples for better clarity.
      const item = buildExample(schema.items, swagger, depth + 1);
      return item == null ? [] : [item, item];
    }

    case 'string':
      if (schema.format === 'date') return '2024-01-15';
      if (schema.format === 'date-time') return '2024-01-15T10:30:00Z';
      if (schema.format === 'email') return 'user@example.com';
      if (schema.format === 'uri' || schema.format === 'url') return 'https://example.com';
      if (schema.format === 'uuid') return '123e4567-e89b-12d3-a456-426614174000';
      if (schema.enum?.length) return schema.enum[0];
      if (truthy(schema.example)) return schema.example;
      if (truthy(schema['x-property-name']) || truthy(schema.title)) {
        const name: string = schema['x-property-name'] ?? schema.title;
        return `sample_${name.toLowerCase().replace(/\s+/g, '_')}`;
      }
      return 'string';

    case 'integer':
      if (truthy(schema.example)) return schema.example;
      if (truthy(schema.minimum)) return schema.minimum;
      if (truthy(schema.maximum)) {
        return preserveFloat(schema.maximum, Math.min(Number(schema.maximum), 100));
      }
      return 1;

    case 'number':
      if (truthy(schema.example)) return schema.example;
      if (truthy(schema.minimum)) return asFloat(schema.minimum); // Ruby's `.to_f`
      if (truthy(schema.maximum)) {
        return preserveFloat(schema.maximum, Math.min(Number(schema.maximum), 100.0));
      }
      return asFloat(10.5);

    case 'boolean':
      // Ruby's `schema['example'] || true`: an explicit `false` example is lost.
      return truthy(schema.example) ? schema.example : true;

    case 'null':
      return null;

    default:
      // Schemas without an explicit type.
      if (schema.properties) return buildExample({ ...schema, type: 'object' }, swagger, depth + 1);
      if (schema.items) return buildExample({ ...schema, type: 'array' }, swagger, depth + 1);
      if (schema.anyOf?.length) return buildExample(schema.anyOf[0], swagger, depth + 1);
      if (schema.oneOf?.length) return buildExample(schema.oneOf[0], swagger, depth + 1);
      if (schema.allOf?.length) {
        const merged: Json = { type: 'object', properties: {} };
        for (const subSchema of schema.allOf as Json[]) {
          Object.assign(merged.properties, subSchema.properties ?? {});
          if (subSchema.$ref) {
            const referenced = dig(swagger, subSchema.$ref);
            Object.assign(merged.properties, referenced?.properties ?? {});
          }
        }
        return buildExample(merged, swagger, depth + 1);
      }
      return null;
  }
}

/** Byte-wise ordering, matching Ruby's `String#<=>` (never locale-aware). */
function compare(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

function rubyInspect(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(rubyInspect).join(', ')}]`;
  if (value === null || value === undefined) return 'nil';
  return JSON.stringify(value) ?? String(value);
}

/**
 * Ruby string interpolation. It matters for OpenAPI 3.1 union types, where an
 * array renders as `["string", "null"]` rather than JavaScript's `string,null`.
 */
function rubyToS(value: unknown): string {
  if (Array.isArray(value)) return rubyInspect(value);
  if (value === null || value === undefined) return '';
  return String(value);
}

function propertyLines(schema: Json, properties: Json): string[] {
  return Object.entries<Json>(properties).map(([name, info]) => {
    const required = schema.required?.includes(name) ? ' (required)' : ' (optional)';
    return `  - \`${name}\`${required}: ${rubyToS(info.type ?? 'object')} - ${info.description ?? ''}`;
  });
}

async function downloadSwagger(): Promise<void> {
  console.log(`⏳ Downloading swagger file from ${SWAGGER_URL}...`);

  let response: Response;
  try {
    response = await fetch(SWAGGER_URL);
  } catch (error) {
    console.error(`🚨 ERROR: Failed to download swagger file: ${(error as Error).message}`);
    process.exit(1);
  }

  if (!response.ok) {
    console.error(`🚨 ERROR: Failed to download swagger file. HTTP status: ${response.status}`);
    process.exit(1);
  }

  await writeFile(SWAGGER_FILE, await response.text());
  console.log('✅ Swagger file downloaded successfully');
}

interface Endpoint {
  path: string;
  method: string;
  operation: Json;
}

function groupEndpointsByTag(swagger: Json): Map<string, Endpoint[]> {
  const byTag = new Map<string, Endpoint[]>();

  for (const [pathName, pathItem] of Object.entries<Json>(swagger.paths ?? {})) {
    for (const [method, operation] of Object.entries<Json>(pathItem)) {
      if (NON_OPERATION_KEYS.includes(method)) continue;

      for (const tag of (operation.tags as string[] | undefined) ?? ['Other']) {
        const endpoints = byTag.get(tag) ?? [];
        endpoints.push({ path: pathName, method: method.toUpperCase(), operation });
        byTag.set(tag, endpoints);
      }
    }
  }

  return byTag;
}

function renderRequestBody(operation: Json, swagger: Json, out: string[]): void {
  const content: Json | undefined = operation.requestBody?.content;
  if (!content) return;

  const contentType = Object.keys(content)[0];
  if (!contentType) return;

  const schema: Json | undefined = content[contentType].schema;
  if (!schema) return;

  out.push(`**Request Body** (${contentType}):`, '');

  const referenced = schema.$ref ? dig(swagger, schema.$ref) : undefined;
  if (schema.$ref) out.push(`- Type: \`${schema.$ref.split('/').pop()}\``);

  const owner = referenced ?? (schema.properties ? schema : undefined);
  if (owner?.properties) {
    out.push('- Properties:', ...propertyLines(owner, owner.properties));

    const example = buildExample(schema, swagger);
    if (example) {
      out.push('- Example:', '```', pretty(example), '```');
    }
  }

  out.push('');
}

function renderParameters(endpoint: Endpoint, swagger: Json, out: string[]): void {
  const all: Json[] = [
    ...((endpoint.operation.parameters as Json[] | undefined) ?? []),
    ...((swagger.paths[endpoint.path].parameters as Json[] | undefined) ?? []),
  ];
  if (all.length === 0) return;

  const seen = new Set<string>();
  out.push('**Parameters**:', '');

  for (const entry of all) {
    if (seen.has(entry.name)) continue;
    seen.add(entry.name);

    const param = entry.$ref ? (dig(swagger, entry.$ref) ?? entry) : entry;
    const required = param.required ? ' (required)' : ' (optional)';
    const type = param.schema ? param.schema.type : 'string';
    out.push(
      `- \`${param.name}\` (${param.in}, ${rubyToS(type)})${required}: ${param.description ?? ''}`,
    );
  }

  out.push('');
}

function renderResponse(operation: Json, swagger: Json, out: string[]): void {
  const responses: Json | undefined = operation.responses;
  if (!responses) return;

  const success: Json | undefined =
    responses['200'] ?? responses['201'] ?? responses['204'] ?? Object.values(responses)[0];
  if (!success) return;

  out.push('**Response**:', '');
  if (success.description) out.push(success.description);

  const contentType = success.content ? Object.keys(success.content)[0] : undefined;
  const schema: Json | undefined = contentType ? success.content[contentType].schema : undefined;
  if (!schema) return;

  const example = buildExample(schema, swagger);
  if (example) out.push('', '```', pretty(example), '```', '');
}

function renderReference(swagger: Json): string[] {
  const out: string[] = ['## Endpoints\n'];
  const byTag = groupEndpointsByTag(swagger);

  for (const tag of [...byTag.keys()].sort()) {
    const tagInfo: Json | undefined = (swagger.tags as Json[] | undefined)?.find(
      (candidate) => candidate.name === tag,
    );

    out.push(`### ${tag}`);
    if (tagInfo?.description) out.push(tagInfo.description);
    out.push('');

    const endpoints = [...byTag.get(tag)!].sort(
      (a, b) => compare(a.path, b.path) || compare(a.method, b.method),
    );

    for (const endpoint of endpoints) {
      const { operation } = endpoint;

      out.push(`#### ${endpoint.method} ${endpoint.path}`);

      if (operation.summary || operation.description) {
        out.push(`**Description**: ${operation.summary || operation.description}`, '');
      }

      renderRequestBody(operation, swagger, out);
      renderParameters(endpoint, swagger, out);
      renderResponse(operation, swagger, out);

      out.push('');
    }
  }

  return out;
}

async function main(): Promise<void> {
  await downloadSwagger();

  console.log(`⏳ Generating API documentation from ${SWAGGER_FILE}...`);

  const { readFile } = await import('node:fs/promises');
  let swagger: Json;
  try {
    swagger = parseSpec(await readFile(SWAGGER_FILE, 'utf8'));
  } catch (error) {
    console.error(`🚨 ERROR: Failed to parse swagger file: ${(error as Error).message}`);
    process.exit(1);
  }

  await writeFile(OUTPUT_FILE, renderReference(swagger).join('\n'));

  const total = Object.values<Json>(swagger.paths ?? {}).reduce(
    (sum, pathItem) =>
      sum + Object.keys(pathItem).filter((key) => !NON_OPERATION_KEYS.includes(key)).length,
    0,
  );

  console.log(`📈 Total endpoints documented: ${total}`);
  console.log(`✅  Done! API documentation generated successfully at: ${OUTPUT_FILE}`);
}

main().catch((error: Error) => {
  console.error(`🚨 ERROR: ${error.message}`);
  if (process.env.DEBUG) console.error(error.stack);
  process.exit(1);
});
