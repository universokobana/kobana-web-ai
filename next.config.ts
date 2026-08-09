import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';

const canonicalHost = process.env.CANONICAL_HOST;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // This repo sits inside a directory that has its own lockfile; pin the root so
  // file tracing does not walk up into it.
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),

  // The markdown served by the app lives in `views/` and is read from disk at
  // request time, so it has to be traced into the standalone/serverless bundle.
  outputFileTracingIncludes: {
    '/**': ['./views/**/*.md'],
  },

  // `Rack::CanonicalHost` equivalent: redirect every other host to the canonical one.
  async redirects() {
    if (!canonicalHost) return [];

    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: `(?!${canonicalHost.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$).*`,
          },
        ],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
