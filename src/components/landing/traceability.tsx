import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Node, NodeArrow } from "@/components/ui/node";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const chain = [
  "Change",
  "Applicable rule",
  "Architecture decision",
  "Specification",
  "Plan",
];

const record = [
  {
    label: "Changed",
    value: (
      <span className="font-mono text-[13.5px]">
        packages/lending/src/market.ts
      </span>
    ),
  },
  {
    label: "Relevant governance",
    value: (
      <div className="flex flex-wrap gap-2">
        {["adr/0031", "specs/0012", "standards/security"].map((id) => (
          <Badge key={id} variant="brand">
            {id}
          </Badge>
        ))}
      </div>
    ),
  },
  { label: "Agent", value: <span className="text-sm">Claude Code</span> },
  {
    label: "Decision",
    value: <span className="text-sm">Standardized market identifier</span>,
  },
];

export function Traceability() {
  return (
    <Section id="traceability">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>14 — Decision traceability</Eyebrow>
          <Heading className="max-w-[760px]">
            Know why an agent made a change.
          </Heading>
          <Lede className="max-w-[760px]">
            Every change can be traced back through the rule, decision,
            specification and plan that shaped it. Organizational traceability —
            not surveillance of individual developers.
          </Lede>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {chain.map((step) => (
            <div key={step} className="flex items-center gap-3">
              <Node>{step}</Node>
              <NodeArrow />
            </div>
          ))}
          <Node variant="brand">Agent execution</Node>
        </div>

        <Card className="w-full max-w-[760px]">
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-hairline px-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[13.5px] font-semibold">
                PR #184
              </span>
              <span className="text-dim">·</span>
              <span className="font-mono text-xs text-muted-foreground">
                acme/app1
              </span>
            </div>
            <Badge>Claude Code</Badge>
          </div>
          <div className="flex flex-col px-6 pt-2 pb-3">
            {record.map((row, index) => (
              <div
                key={row.label}
                className={cn(
                  "flex flex-col gap-2 py-3 sm:flex-row sm:items-start sm:gap-4",
                  index < record.length - 1 && "border-b border-hairline"
                )}
              >
                <Label className="shrink-0 pt-1 sm:w-[180px]">
                  {row.label}
                </Label>
                <div className="grow">{row.value}</div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}
