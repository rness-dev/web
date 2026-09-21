import { Card } from "@/components/ui/card";
import { Node, NodeConnector, NodeRail } from "@/components/ui/node";
import { TerminalLine } from "@/components/ui/terminal";
import { Eyebrow, Heading, Label } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";

const beforeTree = [
  [
    { branch: "", name: "app1", bright: true },
    { branch: " ├── ", name: "CLAUDE.md" },
    { branch: " ├── ", name: "AGENTS.md" },
    { branch: " └── ", name: ".cursor/rules" },
  ],
  [
    { branch: "", name: "app2", bright: true },
    { branch: " ├── ", name: "CLAUDE.md" },
    { branch: " └── ", name: "AGENTS.md" },
  ],
  [
    { branch: "", name: "app3", bright: true },
    { branch: " └── ", name: ".github/copilot-instructions.md" },
  ],
];

export function BeforeAfter() {
  return (
    <Section id="before-after">
      <Container className="flex flex-col gap-12">
        <Eyebrow>10 — Before / after</Eyebrow>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Card className="gap-6 p-8">
            <Label>Before</Label>
            <div className="flex grow flex-col">
              {beforeTree.map((group, index) => (
                <div key={group[0].name} className="contents">
                  {index > 0 ? (
                    <div aria-hidden="true" className="h-2.5" />
                  ) : null}
                  {group.map((row) => (
                    <TerminalLine key={row.branch + row.name}>
                      {row.branch ? (
                        <span className="text-dim">{row.branch}</span>
                      ) : null}
                      <span
                        className={row.bright ? "text-foreground" : undefined}
                      >
                        {row.name}
                      </span>
                    </TerminalLine>
                  ))}
                </div>
              ))}
            </div>
            <p className="border-t border-hairline pt-5 text-[15px] leading-relaxed text-muted-foreground">
              Context is fragmented across repositories and agents.
            </p>
          </Card>

          <Card className="gap-6 p-8">
            <Label tone="brand">With Rness</Label>
            <div className="flex grow flex-col items-center justify-center">
              <div className="flex w-full max-w-[420px] flex-col items-center">
                <Node variant="brand" className="font-semibold">
                  .rness
                </Node>
                <NodeConnector />
                <NodeRail className="max-w-[280px]" />
                <div className="grid w-full grid-cols-3">
                  {["app1", "app2", "app3"].map((repo) => (
                    <div key={repo} className="flex flex-col items-center">
                      <NodeConnector />
                      <Node className="px-3">{repo}</Node>
                      <NodeConnector />
                    </div>
                  ))}
                </div>
                <NodeRail className="max-w-[280px]" />
                <NodeConnector />
                <Node variant="dashed" className="px-3 text-center">
                  Claude · Codex · Cursor · Copilot
                </Node>
              </div>
            </div>
            <p className="border-t border-hairline pt-5 text-[15px] leading-relaxed text-muted-foreground">
              Governance is centralized. Workflows remain decentralized.
            </p>
          </Card>
        </div>

        <Heading size="display" className="pt-6 text-center">
          Centralized governance. Decentralized development.
        </Heading>
      </Container>
    </Section>
  );
}
