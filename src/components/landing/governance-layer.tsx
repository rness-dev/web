import { LogoMark } from "@/components/logo-mark";
import { Card } from "@/components/ui/card";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";

const stack = [
  {
    layer: "AI models",
    members: "Claude · GPT · Gemini · …",
    role: "Provide intelligence",
  },
  {
    layer: "AI agents",
    members: "Claude Code · Codex · Cursor · Copilot · …",
    role: "Execute development tasks",
  },
  {
    layer: "Engineering system",
    members: "GitHub · CI/CD · Cloud · Infrastructure · …",
    role: "System of record for code and development",
  },
];

const surfaces = [
  { title: "Context", items: ["Standards", "Architecture", "Product"] },
  { title: "Rules", items: ["Security", "Testing", "Git"] },
  { title: "Decisions", items: ["ADRs", "Plans", "Specs"] },
];

const rowLayout =
  "grid items-center gap-6 px-7 py-[22px] md:grid-cols-[220px_1fr_320px]";

export function GovernanceLayer() {
  return (
    <Section id="layer">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <Eyebrow>02 — Introducing Rness</Eyebrow>
          <Heading className="max-w-[760px]">
            A governance layer above your agents.
          </Heading>
          <Lede className="max-w-[720px]">
            Rness does not replace your agents or redefine their configuration
            systems. It provides the organizational layer that connects them.
          </Lede>
        </div>

        <Card>
          {stack.slice(0, 2).map((row) => (
            <div
              key={row.layer}
              className={`${rowLayout} border-b border-hairline`}
            >
              <Label>{row.layer}</Label>
              <div className="font-mono text-sm text-bright">{row.members}</div>
              <div className="text-[13.5px] text-muted-foreground">
                {row.role}
              </div>
            </div>
          ))}

          <div
            className={`${rowLayout} border-b border-hairline bg-brand/5 lg:py-[26px]`}
          >
            <Label tone="brand">Agent governance</Label>
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-[18px]" tone="brand" />
              <span className="font-mono text-lg font-semibold text-brand">
                rness
              </span>
            </div>
            <div className="text-[13.5px] text-bright">
              Governs the organizational context and policies agents operate in
            </div>
          </div>

          <div className={rowLayout}>
            <Label>{stack[2].layer}</Label>
            <div className="font-mono text-sm text-bright">
              {stack[2].members}
            </div>
            <div className="text-[13.5px] text-muted-foreground">
              {stack[2].role}
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {surfaces.map((surface) => (
            <Card key={surface.title} className="gap-3.5 px-7 py-6">
              <div className="text-lg font-semibold">{surface.title}</div>
              <div className="flex flex-col gap-1.5 font-mono text-[13px] text-muted-foreground">
                {surface.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <p className="pt-4 text-center text-[26px] leading-[1.2] font-semibold tracking-[-0.02em] sm:text-[32px]">
          Agents execute. Rness governs.
        </p>
      </Container>
    </Section>
  );
}
