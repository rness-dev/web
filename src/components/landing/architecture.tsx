import {
  Terminal,
  TerminalBar,
  TerminalBody,
  TerminalLine,
} from "@/components/ui/terminal";
import { Eyebrow, Heading, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const repositories = ["app1/", "app2/", "app3/", "sdk/", "contracts/"];

const folders = [
  { path: "standards/", description: "Rules and standards, by scope" },
  { path: "adr/", description: "Architecture decisions" },
  { path: "specs/", description: "Specifications" },
  { path: "plans/", description: "Plans" },
  { path: "skills/", description: "Reusable agent skills" },
];

export function Architecture() {
  return (
    <Section id="architecture">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>15 — Product architecture</Eyebrow>
          <Heading className="max-w-[860px]">
            <span className="font-mono tracking-[-0.01em]">.rness</span> — the
            organization-level source of truth.
          </Heading>
          <Lede className="max-w-[760px]">
            <span className="font-mono text-base text-bright">.rness</span> is
            not another agent configuration format. It is the organizational
            knowledge and governance layer that connects to the agent-specific
            configuration systems you already have.
          </Lede>
        </div>

        <div className="grid gap-6 lg:grid-cols-[5fr_7fr]">
          <Terminal>
            <TerminalBar title="github.com/acme/" />
            <TerminalBody className="pt-4 pb-5">
              <TerminalLine className="font-semibold text-brand">
                .rness/
              </TerminalLine>
              {repositories.map((repository) => (
                <TerminalLine key={repository}>{repository}</TerminalLine>
              ))}
              <TerminalLine className="text-dim">…</TerminalLine>
            </TerminalBody>
          </Terminal>

          <Terminal>
            <TerminalBar title=".rness/" />
            <div className="flex flex-col px-6 py-2">
              {folders.map((folder, index) => (
                <div
                  key={folder.path}
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-4 py-[11px]",
                    index < folders.length - 1 && "border-b border-hairline"
                  )}
                >
                  <span className="font-mono text-[13.5px]">{folder.path}</span>
                  <span className="text-sm text-muted-foreground">
                    {folder.description}
                  </span>
                </div>
              ))}
            </div>
          </Terminal>
        </div>
      </Container>
    </Section>
  );
}
