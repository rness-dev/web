import {
  Terminal,
  TerminalBar,
  TerminalBody,
  TerminalLine,
} from "@/components/ui/terminal";
import { Eyebrow, Heading } from "@/components/ui/typography";
import {
  DriftIcon,
  FragmentedIcon,
  LostDecisionIcon,
  NoVisibilityIcon,
} from "@/components/landing/icons";
import { Container, Section } from "@/components/landing/section";

const tree = [
  { branch: "", name: "acme/", bright: true },
  { branch: "├── ", name: "app1", bright: true },
  { branch: "│   ├── ", name: "CLAUDE.md" },
  { branch: "│   ├── ", name: "AGENTS.md" },
  { branch: "│   └── ", name: ".cursor/rules" },
  { branch: "├── ", name: "app2", bright: true },
  { branch: "│   ├── ", name: "CLAUDE.md" },
  { branch: "│   └── ", name: "AGENTS.md" },
  { branch: "└── ", name: "app3", bright: true },
  { branch: "    └── ", name: ".github/copilot-instructions.md" },
];

const symptoms = [
  {
    Icon: FragmentedIcon,
    title: "Fragmented context",
    body: "Different agents and repositories contain different pieces of organizational knowledge.",
  },
  {
    Icon: DriftIcon,
    title: "Cross-project drift",
    body: "Rules and standards get copied between repositories and become inconsistent.",
  },
  {
    Icon: LostDecisionIcon,
    title: "Lost decisions",
    body: "Architecture decisions, plans and specifications become disconnected from the agents implementing them.",
  },
  {
    Icon: NoVisibilityIcon,
    title: "No organizational visibility",
    body: "Engineering leaders cannot easily see what governance applies to which repository, or how AI-assisted development is evolving across the organization.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <Eyebrow>01 — The problem</Eyebrow>
          <Heading className="max-w-[860px]">
            AI development is becoming distributed. Organizational knowledge
            shouldn&apos;t be.
          </Heading>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <Terminal>
            <TerminalBar title="github.com/acme" />
            <TerminalBody className="px-6 pt-5 pb-6">
              {/* The tree repeats file names across repositories, so the row
                  position is what makes a key unique; the list is static. */}
              {tree.map((row, index) => (
                <TerminalLine key={`${index}-${row.name}`}>
                  {row.branch ? (
                    <span className="text-dim">{row.branch}</span>
                  ) : null}
                  <span className={row.bright ? "text-foreground" : undefined}>
                    {row.name}
                  </span>
                </TerminalLine>
              ))}
              <TerminalLine className="mt-4 border-t border-hairline pt-4 text-muted-foreground">
                3 repositories · 4 formats · 0 shared source of truth
              </TerminalLine>
            </TerminalBody>
          </Terminal>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:pt-2">
            {symptoms.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <Icon className="text-muted-foreground" />
                <div className="text-[17px] font-semibold">{title}</div>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
