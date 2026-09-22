import { Card } from "@/components/ui/card";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const github = ["code", "history", "pull requests"];
const rness = [
  "agent context",
  "governance",
  "organizational knowledge",
  "decisions",
  "policies",
];

function OwnershipList({
  items,
  brand = false,
}: {
  items: string[];
  brand?: boolean;
}) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={item}
          className={cn(
            "flex items-center gap-3 py-3",
            index < items.length - 1 && "border-b border-hairline"
          )}
        >
          <span aria-hidden="true" className={brand ? "text-brand" : "text-dim"}>
            →
          </span>
          <span className="text-[15px]">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function Trust() {
  return (
    <Section id="trust">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Eyebrow>17 — Trust &amp; architecture</Eyebrow>
          <Heading className="max-w-[900px]">
            Your repositories remain the source of code. Rness becomes the
            source of organizational agent knowledge.
          </Heading>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="gap-5 p-8">
            <div className="text-xl font-semibold">GitHub</div>
            <OwnershipList items={github} />
          </Card>
          <Card className="gap-5 border-brand/35 p-8">
            <div className="font-mono text-xl font-semibold text-brand">
              rness
            </div>
            <OwnershipList items={rness} brand />
          </Card>
        </div>

        <p className="max-w-[720px] text-[15px] leading-relaxed text-subtle">
          Rness does not replace GitHub. It sits beside it — and points your
          agents at what your organization has decided.
        </p>
      </Container>
    </Section>
  );
}
