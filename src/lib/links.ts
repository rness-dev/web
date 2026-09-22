/*
 * Every outbound destination of the landing page. A destination that does not
 * exist yet has no entry here and no link on the page: a dead `#` promises
 * something the visitor cannot reach.
 */
export const links = {
  github: "https://github.com/rness-dev/rness",
  // Served by the docs deployment through the rewrite in next.config.ts:
  // same domain, no new tab. "/docs" is the canonical form.
  docs: "/docs",
  npm: "https://www.npmjs.com/package/@rness/cli",
  security: "https://github.com/rness-dev/.github/blob/main/SECURITY.md",
} as const;

export const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
