import { execFileSync } from 'node:child_process';
import { config } from 'dotenv';

config({ quiet: true });

/**
 * Reads an environment variable, resolving 1Password secret references
 * (`op://vault/item/field`) through the `op` CLI — the TypeScript counterpart
 * of the old `config/1password.rb`.
 */
export function env(name: string): string | undefined {
  const value = process.env[name];
  if (!value?.includes('op://')) return value;

  return execFileSync('op', ['read', value], { encoding: 'utf8' }).trim();
}

/** Same as `env`, but exits with a readable message when the value is missing. */
export function requireEnv(name: string): string {
  const value = env(name);
  if (!value) {
    console.error(`Error: ${name} environment variable is not set`);
    process.exit(1);
  }
  return value;
}
