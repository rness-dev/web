import { Badge } from "@/components/ui/badge";
import { NotShipped } from "@/components/ui/not-shipped";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";
import { cn } from "@/lib/utils";

/* "Core" means Rness treats the capability as its job, not as a side effect. */
type Support = "yes" | "none" | "Limited" | "Partial" | "Core";

/* `shipped: false` — the page claims it for Rness, the CLI does not do it yet. */
const rows: {
  capability: string;
  agents: Support;
  rules: Support;
  rness: Support;
  shipped?: false;
}[] = [
  { capability: "Execute coding tasks", agents: "yes", rules: "none", rness: "none" },
  { capability: "Repository instructions", agents: "yes", rules: "yes", rness: "yes" },
  { capability: "Cross-repository governance", agents: "Limited", rules: "Limited", rness: "Core" },
  { capability: "Cross-agent governance", agents: "Limited", rules: "Limited", rness: "Core" },
  { capability: "Organization-wide context", agents: "Limited", rules: "Limited", rness: "Core" },
  { capability: "Policy enforcement", agents: "Limited", rules: "Partial", rness: "Core", shipped: false },
  { capability: "ADR / architecture memory", agents: "Partial", rules: "Partial", rness: "Core" },
  { capability: "Context inheritance", agents: "Partial", rules: "Partial", rness: "Core" },
  { capability: "Configuration drift", agents: "Limited", rules: "Partial", rness: "Core" },
];

function SupportCell({ value }: { value: Support }) {
  if (value === "yes") return <>✓</>;
  if (value === "none") return <span className="text-muted-foreground">—</span>;
  if (value === "Core") return <Badge variant="brand">Core</Badge>;
  return <span className="text-muted-foreground">{value}</span>;
}

const cellClass = "border-hairline px-5 py-4 text-[15px]";

export function Category() {
  return (
    <Section id="category">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>11 — A new layer in the stack</Eyebrow>
          <Heading className="max-w-[760px]">
            A new layer in the AI development stack.
          </Heading>
          <Lede className="max-w-[760px]">
            Coding agents are not what Rness competes with — they are what it
            governs. The relevant comparison is between the layers that address
            organization-wide AI governance.
          </Lede>
        </div>

        <Card>
          <Table className="min-w-[720px] border-collapse">
            <TableHeader>
              <TableRow className="border-hairline bg-surface hover:bg-surface">
                <TableHead scope="col" className={cn(cellClass, "w-2/5")}>
                  <Label>Layer / capability</Label>
                </TableHead>
                <TableHead scope="col" className={cn(cellClass, "w-1/5")}>
                  <div className="flex flex-col gap-1">
                    <Label tone="bright">Coding agents</Label>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      Claude Code · Codex · Cursor · Copilot
                    </span>
                  </div>
                </TableHead>
                <TableHead scope="col" className={cn(cellClass, "w-1/5")}>
                  <div className="flex flex-col gap-1">
                    <Label tone="bright">Project rules</Label>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      CLAUDE.md · AGENTS.md · .cursor/rules
                    </span>
                  </div>
                </TableHead>
                <TableHead
                  scope="col"
                  className={cn(cellClass, "w-1/5 bg-brand/5")}
                >
                  <div className="flex flex-col gap-1">
                    <Label tone="brand">Agent governance</Label>
                    <span className="font-mono text-[11px] text-brand/80">
                      Rness
                    </span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.capability}
                  className="border-hairline hover:bg-transparent"
                >
                  <TableCell className={cellClass}>{row.capability}</TableCell>
                  <TableCell className={cellClass}>
                    <SupportCell value={row.agents} />
                  </TableCell>
                  <TableCell className={cellClass}>
                    <SupportCell value={row.rules} />
                  </TableCell>
                  <TableCell className={cn(cellClass, "bg-brand/3")}>
                    <span className="flex items-center gap-2 whitespace-nowrap">
                      <SupportCell value={row.rness} />
                      {row.shipped === false ? <NotShipped /> : null}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <p className="max-w-[800px] text-sm leading-relaxed text-subtle">
          Categories, not vendors. Coding agents execute tasks. Project rules
          instruct a single repository. Agent governance spans the organization
          — every repository, every agent.
        </p>
      </Container>
    </Section>
  );
}
