import { SiteHeader } from "@/components/site-header";
import { HeroTerminal } from "@/components/hero-terminal";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />

      <main className="flex flex-1 flex-col items-center gap-7 px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex max-w-2xl flex-col items-center gap-4.5 text-center">
          <span className="font-mono text-[11px] tracking-[.08em] text-[#6b7278]">
            OPEN SOURCE · GIT-NATIVE · AGENT-AGNOSTIC
          </span>
          <h1 className="text-[32px] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[42px]">
            Git-native operating context for AI agents
          </h1>
          <p className="max-w-[540px] text-base leading-relaxed text-muted-foreground sm:text-[16.5px]">
            Structure projects, decisions, workflows, and growth knowledge so
            Claude, Codex, and other agents can work with real organizational
            context.
          </p>
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#github"
              className="rounded-md bg-foreground px-4.5 py-2.5 text-sm font-medium text-background no-underline"
            >
              View on GitHub →
            </a>
            <a
              href="#discussions"
              className="rounded-md border border-white/16 px-4.5 py-2.5 text-sm text-[#c7cbce] no-underline"
            >
              Join Discussions
            </a>
            <a
              href="#docs"
              className="text-[13.5px] text-primary no-underline hover:text-[#79c2b4]"
            >
              Read the docs →
            </a>
          </div>
        </div>

        <HeroTerminal />

        <div className="flex gap-5 font-mono text-[11.5px] text-[#6b7278]">
          <span>Open source</span>
          <span>·</span>
          <span>Git-native</span>
          <span>·</span>
          <span>Agent-agnostic</span>
        </div>
      </main>
    </div>
  );
}
