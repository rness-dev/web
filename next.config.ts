import type { NextConfig } from "next";

/*
 * The docs site is a separate deployment (rness-dev/docs, VitePress, built
 * with `base: "/docs/"`). rness.dev/docs reaches it through a rewrite, so the
 * visitor never leaves the domain and the docs keep one canonical host.
 *
 * `/docs` itself is sent to the deployment's root, not to `/docs`: on Vercel
 * the proxied request for a bare directory arrives upstream with a trailing
 * slash, the docs deployment redirects that to `/docs` (`trailingSlash:
 * false`), and the redirect comes back to rness.dev/docs — a loop. The root
 * answers 200 in every form.
 */
const DOCS_ORIGIN = "https://rness-docs.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/docs", destination: `${DOCS_ORIGIN}/` },
      { source: "/docs/:path+", destination: `${DOCS_ORIGIN}/docs/:path+` },
    ];
  },
};

export default nextConfig;
