/*
 * Every outbound destination of the landing page. A destination that does not
 * exist yet has no entry here and no link on the page: a dead `#` promises
 * something the visitor cannot reach.
 */
export const links = {
  github: "https://github.com/rness-dev/rness",
  // The docs site (rness-dev/docs) is not deployed yet; until it is, the CLI
  // README is the documentation. Becomes "/docs" with that deployment.
  docs: "https://github.com/rness-dev/rness/tree/main/packages/cli#readme",
  npm: "https://www.npmjs.com/package/@rness/cli",
  security: "https://github.com/rness-dev/.github/blob/main/SECURITY.md",
} as const;

export const externalLink = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
