import { Badge } from "@/components/ui/badge";
import { NotShipped } from "@/components/ui/not-shipped";
import { Card } from "@/components/ui/card";
import { NodeConnector } from "@/components/ui/node";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { Container, SplitRow } from "@/components/landing/section";
import { cn } from "@/lib/utils";

/* Each level indents further: scope narrows as work moves closer to the code. */
const levels = [
  {
    scope: "Organization",
    indent: "",
    tags: [
      { label: "Rules", variant: "neutral" as const },
      { label: "Security", variant: "neutral" as const },
      { label: "Architecture", variant: "neutral" as const },
    ],
  },
  {
    scope: "Repository",
    indent: "sm:ml-10",
    tags: [
      { label: "app/", variant: "neutral" as const },
      { label: "api/", variant: "neutral" as const },
      { label: "contracts/", variant: "brand" as const },
    ],
  },
  {
    scope: "Directory",
    indent: "sm:ml-20",
    tags: [{ label: "contracts/src/", variant: "brand" as const }],
  },
  {
    scope: "File",
    indent: "sm:ml-30",
    tags: [{ label: "*.sol", variant: "brand" as const }],
    highlight: true,
    // Scopes are directory prefixes today: no file or pattern level.
    shipped: false,
  },
];

export function Inheritance() {
  return (
    <section id="inheritance" className="border-t border-hairline">
      <Container className="py-20 lg:py-[120px]">
        <SplitRow
          media={
            <Card className="p-8">
              {levels.map((level, index) => (
                <div key={level.scope} className="contents">
                  {index > 0 ? (
                    <div
                      className={cn(
                        "flex items-center gap-2.5",
                        level.indent
                      )}
                    >
                      <NodeConnector className="h-6" />
                      <span className="font-mono text-[11px] text-muted-foreground">
                        inherits · specializes
                      </span>
                    </div>
                  ) : null}
                  <div
                    className={cn(
                      "flex flex-col gap-3.5 rounded-lg border px-5 py-[18px]",
                      level.indent,
                      level.highlight
                        ? "border-brand bg-brand-surface"
                        : "border-control bg-surface-raised"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Label tone={level.highlight ? "brand" : "bright"}>
                        {level.scope}
                      </Label>
                      {level.shipped === false ? <NotShipped /> : null}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {level.tags.map((tag) => (
                        <Badge key={tag.label} variant={tag.variant}>
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          }
        >
          <Eyebrow>12 — Context inheritance</Eyebrow>
          <Heading as="h3" size="sub">
            The right context, at the right scope.
          </Heading>
          <Lede>
            Organizational knowledge can be inherited and specialized as work
            moves closer to the code.
          </Lede>
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[13px] text-bright">
            <span>Organization</span>
            <span className="text-dim">→</span>
            <span>Repository</span>
            <span className="text-dim">→</span>
            <span>Directory</span>
            <span className="text-dim">→</span>
            <span>File</span>
          </div>
        </SplitRow>
      </Container>
    </section>
  );
}
