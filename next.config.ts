import type { NextConfig } from "next";

/*
 * rness.dev is served by two Vercel projects behind one origin. This site owns
 * the domain; the docs (rness-dev/docs, VitePress, built with `base: "/docs/"`)
 * are a separate deployment proxied here by path, so visitors see one domain
 * and search engines one host.
 *
 * The docs deployment serves its pages and assets from its root; the `/docs`
 * prefix the HTML carries is stripped on the way out. Stripping also keeps the
 * bare `/docs` off the docs deployment's trailing-slash redirect: on Vercel a
 * proxied `/docs/:path*` with an empty path arrives upstream as `/docs/`,
 * which that deployment answers with `308 → /docs` — a loop back to here. The
 * root answers 200 in every form, so `/docs` is sent there explicitly.
 *
 * `beforeFiles`, so the rewrite is decided before this app's own files and
 * before the routing rules a Next.js build emits for React Server Components
 * requests, which mutate the path (`/docs.rsc`) ahead of `afterFiles`.
 */
const DOCS_ORIGIN = "https://rness-docs.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/docs", destination: `${DOCS_ORIGIN}/` },
        { source: "/docs/:path*", destination: `${DOCS_ORIGIN}/:path*` },
      ],
    };
  },
};

export default nextConfig;
