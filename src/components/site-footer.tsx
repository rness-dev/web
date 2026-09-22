import { LogoMark } from "@/components/logo-mark";
import { Label } from "@/components/ui/typography";
import { ArrowUpIcon } from "@/components/landing/icons";
import { Container } from "@/components/landing/section";
import { externalLink, links } from "@/lib/links";

const columns = [
  {
    heading: "Product",
    links: [
      {
        label: "Cross-repository governance",
        href: "#capabilities",
        external: false,
      },
      {
        label: "Cross-agent governance",
        href: "#capabilities",
        external: false,
      },
      { label: "Policy enforcement", href: "#capabilities", external: false },
      { label: "Drift detection", href: "#drift", external: false },
      {
        label: "Decision traceability",
        href: "#traceability",
        external: false,
      },
      { label: "CLI", href: "#cli", external: false },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: links.docs, external: false },
      { label: "GitHub", href: links.github, external: true },
      { label: "npm", href: links.npm, external: true },
      { label: "Security", href: links.security, external: true },
      { label: "The .rness folder", href: "#architecture", external: false },
      { label: "Agent governance layer", href: "#category", external: false },
    ],
  },
];

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background">
      <Container className="flex flex-col gap-14 pt-16 pb-10 lg:pt-[72px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex flex-col gap-5 lg:pr-10">
            <a
              href="#hero"
              aria-label="Rness home"
              className="flex items-center gap-2.5"
            >
              <LogoMark className="size-[22px]" />
              <span className="font-mono text-[15px] font-semibold tracking-[-0.01em]">
                rness
              </span>
            </a>
            <p className="max-w-[320px] text-[15px] leading-relaxed text-pretty text-muted-foreground">
              The governance layer for AI agents across a GitHub organization.
              One source of truth for the context, rules, decisions and
              engineering knowledge your agents need.
            </p>
            <p className="font-mono text-[12.5px] text-bright">
              Agents execute. Your organization governs.
            </p>
          </div>

          {columns.map((column) => (
            <nav
              key={column.heading}
              aria-label={column.heading}
              className="flex flex-col gap-3.5"
            >
              <Label tone="bright" className="mb-1">
                {column.heading}
              </Label>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? externalLink : {})}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-hairline pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[13px] text-muted-foreground">
              © 2026 Rness
            </span>
            <span className="text-dim">·</span>
            <span className="font-mono text-xs text-muted-foreground">
              No new agent. No new workflow. No new configuration format.
            </span>
          </div>
          <nav
            aria-label="Page"
            className="flex items-center gap-6 text-[13px]"
          >
            <a
              href="#hero"
              className={`${linkClass} inline-flex items-center gap-1.5`}
            >
              Back to top
              <ArrowUpIcon size={14} />
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
