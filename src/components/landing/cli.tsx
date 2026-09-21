import {
  Terminal,
  TerminalBar,
  TerminalBody,
  TerminalGap,
  TerminalLine,
  TerminalPrompt,
} from "@/components/ui/terminal";
import { Eyebrow, Heading, Lede } from "@/components/ui/typography";
import { Container } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const commands = [
  { command: "rness init", description: "Initialize an organization" },
  { command: "rness status", description: "Governance status" },
  { command: "rness context", description: "Resolved context" },
  { command: "rness rules", description: "Applicable rules" },
  { command: "rness decisions", description: "Applicable decisions" },
  { command: "rness sync", description: "Sync organizational governance" },
  { command: "rness doctor", description: "Diagnose drift" },
];

const summary = [
  { label: "Organization", value: "acme" },
  { label: "Repositories", value: "24" },
  { label: "Agents", value: "4" },
];

const governance = [
  "Context",
  "Standards",
  "Security",
  "ADRs",
  "Specs",
  "Plans",
];

export function Cli() {
  return (
    <section id="cli" className="border-t border-hairline">
      <Container className="grid items-start gap-12 py-20 lg:grid-cols-[5fr_7fr] lg:gap-[72px] lg:py-[120px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow>17 — CLI</Eyebrow>
            <Heading as="h3" size="sub">
              Governance you can run from the terminal.
            </Heading>
            <Lede>
              Inspect, resolve and sync organizational governance without
              leaving the shell.
            </Lede>
          </div>

          <div className="flex flex-col">
            {commands.map((entry, index) => (
              <div
                key={entry.command}
                className={cn(
                  "flex flex-wrap items-center justify-between gap-4 py-2.5",
                  index < commands.length - 1 && "border-b border-hairline"
                )}
              >
                <span className="font-mono text-[13.5px]">{entry.command}</span>
                <span className="text-sm text-muted-foreground">
                  {entry.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Terminal>
          <TerminalBar title="acme — zsh" />
          <TerminalBody className="overflow-x-auto px-7 pt-6 pb-7">
            <TerminalLine>
              <TerminalPrompt />
              rness status
            </TerminalLine>
            <TerminalGap />
            {summary.map((row) => (
              <TerminalLine key={row.label}>
                <span className="inline-block w-[16ch] text-muted-foreground">
                  {row.label}
                </span>
                {row.value}
              </TerminalLine>
            ))}
            <TerminalGap />
            <TerminalLine className="text-muted-foreground">
              Governance
            </TerminalLine>
            {governance.map((item) => (
              <TerminalLine key={item}>
                <span className="inline-block w-[16ch]">{`  ${item}`}</span>
                <span className="text-brand">✓</span>
              </TerminalLine>
            ))}
            <TerminalGap />
            <TerminalLine className="text-warn">Drift detected</TerminalLine>
            <TerminalLine>
              {"  app3"}
              <span className="text-dim">{" / "}</span>
              security policy
            </TerminalLine>
          </TerminalBody>
        </Terminal>
      </Container>
    </section>
  );
}
