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
  { command: "rness create", description: "Create or join an organization" },
  { command: "rness add", description: "Add a repository to the workspace" },
  { command: "rness sync", description: "Sync organizational governance" },
  { command: "rness context", description: "Resolved context" },
  {
    command: "rness validate",
    description: "Check the context and its blocks",
  },
  { command: "rness upgrade", description: "Move to a new CLI version" },
  { command: "rness login", description: "Reach private repositories" },
];

/*
 * A session of @rness/cli 0.5.3, verbatim, on a workspace where someone edited
 * app3's block by hand: `--check` finds it, `sync` rewrites it. Statuses are
 * padded to eight columns, as the CLI prints them.
 */
const check = [
  { status: "unchanged", file: "AGENTS.md" },
  { status: "unchanged", file: "org/app1/AGENTS.md" },
  { status: "unchanged", file: "org/app2/AGENTS.md" },
  { status: "stale", file: "org/app3/AGENTS.md" },
];

const sync = [
  { status: "unchanged", file: "AGENTS.md" },
  { status: "unchanged", file: "org/app1/AGENTS.md" },
  { status: "unchanged", file: "org/app2/AGENTS.md" },
  { status: "updated", file: "org/app3/AGENTS.md" },
];

const tone: Record<string, string> = {
  stale: "text-warn",
  updated: "text-brand",
  unchanged: "text-muted-foreground",
};

function Output({ rows }: { rows: { status: string; file: string }[] }) {
  return rows.map((row) => (
    <TerminalLine key={row.file}>
      <span className={tone[row.status]}>{`${row.status.padEnd(8)} `}</span>
      {row.file}
    </TerminalLine>
  ));
}

export function Cli() {
  return (
    <section id="cli" className="border-t border-hairline">
      <Container className="grid items-start gap-12 py-20 lg:grid-cols-[5fr_7fr] lg:gap-[72px] lg:py-[120px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Eyebrow>16 — CLI</Eyebrow>
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
              rness sync --check
            </TerminalLine>
            <Output rows={check} />
            <TerminalLine className="text-warn">
              1 block(s) out of date — run rness sync
            </TerminalLine>
            <TerminalGap />
            <TerminalLine>
              <TerminalPrompt />
              rness sync -y
            </TerminalLine>
            <Output rows={sync} />
          </TerminalBody>
        </Terminal>
      </Container>
    </section>
  );
}
