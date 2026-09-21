import { LogoMark } from "@/components/logo-mark";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Node, NodeConnector, NodeRail } from "@/components/ui/node";
import { Heading, Label, Lede } from "@/components/ui/typography";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/landing/icons";
import { InstallCommand } from "@/components/landing/install-command";
import { Container, GridBackdrop } from "@/components/landing/section";
import { externalLink, links } from "@/lib/links";

const branches = [
  { repository: "app1", agent: "Claude Code" },
  { repository: "app2", agent: "Codex" },
  { repository: "app3", agent: "Cursor" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20 pb-16 lg:pt-[104px] lg:pb-24"
    >
      <GridBackdrop
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 10%, transparent 100%)",
        }}
      />

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <p className="inline-flex h-[30px] items-center gap-2.5 rounded-full border border-control bg-surface pr-3 pl-2.5 font-mono text-xs text-muted-foreground">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-brand"
          />
          Agent governance for GitHub organizations
        </p>

        <Heading as="h1" size="hero" className="max-w-[1000px]">
          One organization. Many repositories. Many agents. One source of truth.
        </Heading>

        <Lede className="max-w-[720px] sm:text-xl">
          Rness is the governance layer for AI-native engineering teams —
          connecting organizational context, rules, decisions and engineering
          knowledge to the agents your teams already use.
        </Lede>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink size="lg" href="#cta">
            Get started
            <ArrowRightIcon />
          </ButtonLink>
          <ButtonLink
            size="lg"
            variant="outline"
            href={links.github}
            {...externalLink}
          >
            View on GitHub
            <ArrowUpRightIcon />
          </ButtonLink>
        </div>

        <InstallCommand />

        <p className="font-mono text-[12.5px] text-subtle">
          No new agent. No new workflow. No new configuration format.
        </p>
      </Container>

      <Container className="relative mt-14 lg:mt-[72px]">
        <Card className="items-center px-4 py-10 lg:px-0 lg:pb-11">
          <div className="flex w-full max-w-[960px] flex-col items-center">
            <Label className="mb-2.5">Your GitHub organization</Label>
            <Node className="min-h-11 px-5">github.com/acme</Node>
            <NodeConnector />
            <Node variant="brand" className="min-h-11 gap-2.5 px-5">
              <LogoMark className="size-4" tone="current" />
              <span className="font-semibold">rness</span>
              <span className="opacity-75">agent governance</span>
            </Node>
            <NodeConnector />
            <NodeRail />
            <div className="grid w-full grid-cols-3">
              {branches.map((branch) => (
                <div
                  key={branch.repository}
                  className="flex flex-col items-center"
                >
                  <NodeConnector />
                  <Node>{branch.repository}</Node>
                  <NodeConnector />
                  <Node>{branch.agent}</Node>
                  <NodeConnector />
                </div>
              ))}
            </div>
            <NodeRail />
            <NodeConnector />
            <Node variant="dashed" className="px-5">
              existing workflow — unchanged
            </Node>
          </div>
        </Card>
      </Container>
    </section>
  );
}
