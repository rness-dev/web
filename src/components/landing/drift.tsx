import { LogoMark } from "@/components/logo-mark";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { WarningIcon } from "@/components/landing/icons";
import { Container, SplitRow } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const counts = [
  { value: "24", label: "Repositories" },
  { value: "4", label: "Agents" },
  { value: "18", label: "Policies" },
];

const statuses = [
  { repository: "app1", drifted: false },
  { repository: "app2", drifted: false },
  { repository: "app3", drifted: true },
  { repository: "app4", drifted: false },
];

const drifts = [
  { repository: "app3", detail: "security policy" },
  { repository: "app7", detail: "outdated architecture rule" },
  { repository: "app12", detail: "missing testing standard" },
];

const rowClass = "flex items-center justify-between gap-4 py-3";

export function Drift() {
  return (
    <section id="drift" className="border-t border-hairline">
      <Container className="py-20 lg:py-[120px]">
        <SplitRow
          media={
            <Card>
              <div className="flex h-12 shrink-0 items-center justify-between border-b border-hairline px-4">
                <div className="flex items-center gap-2.5">
                  <LogoMark className="size-4" />
                  <span className="font-mono text-[13px] font-semibold">
                    rness
                  </span>
                  <span className="text-dim">/</span>
                  <span className="font-mono text-[13px] text-bright">
                    acme
                  </span>
                </div>
                <Badge>Organization</Badge>
              </div>

              <div className="grid grid-cols-3 border-b border-hairline">
                {counts.map((count, index) => (
                  <div
                    key={count.label}
                    className={cn(
                      "flex flex-col gap-1.5 px-6 py-5",
                      index < counts.length - 1 && "border-r border-hairline"
                    )}
                  >
                    <span className="font-mono text-[28px] font-semibold tracking-[-0.02em]">
                      {count.value}
                    </span>
                    <Label>{count.label}</Label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col px-6 pt-5 pb-2">
                <Label className="mb-2">Governance status</Label>
                {statuses.map((status, index) => (
                  <div
                    key={status.repository}
                    className={cn(
                      rowClass,
                      index < statuses.length - 1 && "border-b border-hairline"
                    )}
                  >
                    <span className="font-mono text-[13.5px]">
                      {status.repository}
                    </span>
                    {status.drifted ? (
                      <Badge variant="warn">
                        <WarningIcon size={12} />
                        drift detected
                      </Badge>
                    ) : (
                      <Badge variant="brand">✓ compliant</Badge>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col border-t border-hairline px-6 pt-5 pb-6">
                <Label className="mb-2">Drift</Label>
                {drifts.map((drift, index) => (
                  <div
                    key={drift.repository}
                    className={cn(
                      rowClass,
                      index < drifts.length - 1 && "border-b border-hairline"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <WarningIcon className="text-warn" />
                      <span className="font-mono text-[13.5px]">
                        {drift.repository}
                      </span>
                      <span className="text-dim">/</span>
                      <span className="text-sm text-bright">
                        {drift.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          }
        >
          <Eyebrow status="not-shipped">13 — Configuration drift</Eyebrow>
          <Heading as="h3" size="sub">
            Know when your repositories drift from organizational policy.
          </Heading>
          <Lede>
            Rness compares each repository against the organization&apos;s
            governance and surfaces what has drifted — before it reaches an
            agent.
          </Lede>
        </SplitRow>
      </Container>
    </section>
  );
}
