/*
 * Every outbound destination of the landing page. A destination that does not
 * exist yet has no entry here and no link on the page: a dead `#` promises
 * something the visitor cannot reach.
 */
export const links = {
  github: "https://github.com/rness-dev/rness",
  // Deployed on 2026-09-22. Becomes "https://rness.dev/docs" once the domain
  // is configured. This is the canonical form; "/docs/" redirects to it.
  docs: "https://rness-docs.vercel.app/docs",
  npm: "https://www.npmjs.com/package/@rness/cli",
  security: "https://github.com/rness-dev/.github/blob/main/SECURITY.md",
} as const;

export const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
