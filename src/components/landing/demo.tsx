import {
  Terminal,
  TerminalBar,
  TerminalBody,
  TerminalGap,
  TerminalLine,
  TerminalPrompt,
} from "@/components/ui/terminal";
import { Eyebrow, Heading, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";

const session = [
  { label: "Organization", value: "acme" },
  { label: "Repository", value: "app1" },
  { label: "Agent", value: "Claude Code" },
];

const applicable = [
  "Security standards",
  "Engineering standards",
  "Architecture principles",
  "adr/0014",
  "plans/0027",
];

const resolved = [
  { label: "Organization rules", count: 12 },
  { label: "Repository rules", count: 7 },
  { label: "Relevant ADRs", count: 3 },
  { label: "Active plans", count: 2 },
  { label: "Security policies", count: 4 },
];

export function Demo() {
  return (
    <Section id="demo">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <Eyebrow status="not-shipped">09 — Product in action</Eyebrow>
          <Heading>See Rness in action</Heading>
          <Lede className="max-w-[640px]">
            A developer opens a repository and starts their agent — exactly as
            they do today.
          </Lede>
        </div>

        <Terminal className="w-full max-w-[900px]">
          <TerminalBar title="app1 — zsh" />
          <TerminalBody className="overflow-x-auto px-7 pt-6 pb-7">
            <TerminalLine>
              <TerminalPrompt />
              cd app1
            </TerminalLine>
            <TerminalLine>
              <TerminalPrompt />
              claude
            </TerminalLine>
            <TerminalGap />
            <TerminalLine className="font-semibold text-brand">
              rness
            </TerminalLine>
            <TerminalGap className="h-2" />
            {session.map((row) => (
              <TerminalLine key={row.label}>
                <span className="inline-block w-[24ch] text-muted-foreground">
                  {row.label}
                </span>
                {row.value}
              </TerminalLine>
            ))}
            <TerminalGap />
            <TerminalLine className="text-muted-foreground">
              Applicable governance
            </TerminalLine>
            {applicable.map((item) => (
              <TerminalLine key={item}>
                <span className="text-brand">{"✓  "}</span>
                {item}
              </TerminalLine>
            ))}
            <TerminalGap />
            <TerminalLine className="text-foreground">
              <TerminalPrompt symbol=">" />
              Implement the new lending endpoint
            </TerminalLine>
            <TerminalGap />
            <TerminalLine className="text-muted-foreground">
              Context resolved
            </TerminalLine>
            {resolved.map((row) => (
              <TerminalLine key={row.label}>
                <span className="inline-block w-[24ch]">{row.label}</span>
                <span className="inline-block w-[4ch] text-right text-brand">
                  {row.count}
                </span>
              </TerminalLine>
            ))}
            <TerminalGap />
            <TerminalLine className="text-muted-foreground">
              Claude Code continues in the same session.
            </TerminalLine>
          </TerminalBody>
        </Terminal>

        <p className="max-w-[800px] text-center text-xl leading-[1.35] font-medium tracking-[-0.015em] text-balance sm:text-2xl">
          Claude remains Claude. The developer remains in the same workflow.
          Rness provides the organizational governance around it.
        </p>
      </Container>
    </Section>
  );
}
