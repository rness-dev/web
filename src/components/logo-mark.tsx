import { cn } from "@/lib/utils";

/*
 * Three stacked bars with the middle one carrying the brand colour: the
 * governance layer sitting between the agents above and the code below.
 * `tone="current"` lets the mark inherit the surrounding text colour, which is
 * how it is drawn inside a brand-coloured node.
 */
export function LogoMark({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "brand" | "current";
}) {
  const outer =
    tone === "default"
      ? "#52525b"
      : tone === "brand"
        ? "var(--brand)"
        : "currentColor";
  const middle = tone === "current" ? "currentColor" : "var(--brand)";
  const outerOpacity = tone === "default" ? undefined : 0.4;

  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3.5"
        width="16"
        height="3"
        rx="1.5"
        fill={outer}
        opacity={outerOpacity}
      />
      <rect x="3" y="9.5" width="16" height="3" rx="1.5" fill={middle} />
      <rect
        x="3"
        y="15.5"
        width="16"
        height="3"
        rx="1.5"
        fill={outer}
        opacity={outerOpacity}
      />
    </svg>
  );
}
