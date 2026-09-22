import { Card } from "@/components/ui/card";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";

const steps = [
  {
    index: "01",
    title: "Connect",
    body: "Connect your GitHub organization.",
  },
  {
    index: "02",
    title: "Govern",
    body: "Define organizational context, standards, policies, decisions, specs and plans.",
  },
  {
    index: "03",
    title: "Keep coding",
    body: "Developers continue using Claude Code, Codex, Cursor, GitHub Copilot or other agents exactly as before.",
  },
];

export function Workflow() {
  return (
    <Section id="workflow">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>15 — Developer workflow</Eyebrow>
          <Heading className="max-w-[760px]">
            Nothing changes for developers.
          </Heading>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.index} className="gap-4 p-7">
              <div className="font-mono text-[13px] text-brand">
                {step.index}
              </div>
              <div className="text-[22px] font-semibold tracking-[-0.01em]">
                {step.title}
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Card>
          ))}
        </div>

        <p className="text-2xl leading-[1.25] font-medium tracking-[-0.02em] sm:text-[28px]">
          Rness works around your workflow, not against it.
        </p>
      </Container>
    </Section>
  );
}
