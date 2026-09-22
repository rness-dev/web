import type { NextConfig } from "next";

/*
 * The docs site is a separate deployment (rness-dev/docs, VitePress, built
 * with `base: "/docs/"`). rness.dev/docs reaches it through a rewrite, so the
 * visitor never leaves the domain and the docs keep one canonical host.
 * `:path*` also matches the empty path, so `/docs` itself is covered.
 */
const DOCS_ORIGIN = "https://rness-docs.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/docs/:path*", destination: `${DOCS_ORIGIN}/docs/:path*` }];
  },
};

export default nextConfig;
