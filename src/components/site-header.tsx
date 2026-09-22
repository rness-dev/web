import { LogoMark } from "@/components/logo-mark";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/landing/section";
import { externalLink, links } from "@/lib/links";

const navLinks = [
  { label: "Product", href: "#capabilities", external: false },
  { label: "How it works", href: "#demo", external: false },
  { label: "CLI", href: "#cli", external: false },
  { label: "Docs", href: links.docs, external: false },
  { label: "GitHub", href: links.github, external: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-8">
        <a href="#hero" aria-label="Rness home" className="flex items-center gap-2.5">
          <LogoMark className="size-[22px]" />
          <span className="font-mono text-[15px] font-semibold tracking-[-0.01em]">
            rness
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? externalLink : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLink href="#cta" className="text-sm">
            Get started
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
