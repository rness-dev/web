import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const navLinks = [
  { label: "Why", href: "#why" },
  { label: "Example", href: "#example" },
  { label: "Structure", href: "#structure" },
  { label: "Docs", href: "#docs" },
];

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-10">
      <Link href="/" className="flex items-center gap-2.5">
        <LogoMark className="size-6" />
        <span className="font-mono text-[15px] font-semibold tracking-tight text-foreground">
          rness
        </span>
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2.5 sm:gap-3">
        <button
          type="button"
          aria-label="Toggle theme"
          className="hidden size-8 items-center justify-center text-muted-foreground sm:inline-flex"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <circle
              cx="8"
              cy="8"
              r="6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M8 1.5A6.5 6.5 0 0 0 8 14.5Z" fill="currentColor" />
          </svg>
        </button>
        <a
          href="#discussions"
          className="hidden rounded-md border border-white/16 px-3.5 py-2 text-[13px] text-[#c7cbce] no-underline sm:inline-block"
        >
          Discussions
        </a>
        <a
          href="#github"
          className="rounded-md bg-foreground px-3.5 py-2 text-[13px] font-medium text-background no-underline"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
