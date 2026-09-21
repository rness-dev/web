import { LogoMark } from "@/components/logo-mark";
import { Label } from "@/components/ui/typography";
import { ArrowUpIcon } from "@/components/landing/icons";
import { Container } from "@/components/landing/section";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Cross-repository governance", href: "#capabilities" },
      { label: "Cross-agent governance", href: "#capabilities" },
      { label: "Policy enforcement", href: "#capabilities" },
      { label: "Drift detection", href: "#drift" },
      { label: "Decision traceability", href: "#traceability" },
      { label: "CLI", href: "#cli" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "The .rness folder", href: "#architecture" },
      { label: "Agent governance layer", href: "#category" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Security", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background">
      <Container className="flex flex-col gap-14 pt-16 pb-10 lg:pt-[72px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
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
                <a key={link.label} href={link.href} className={linkClass}>
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
            aria-label="Legal"
            className="flex items-center gap-6 text-[13px]"
          >
            <a href="#" className={linkClass}>
              Privacy
            </a>
            <a href="#" className={linkClass}>
              Terms
            </a>
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
