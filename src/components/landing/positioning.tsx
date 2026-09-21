import { Card } from "@/components/ui/card";
import { Heading, Label, Lede } from "@/components/ui/typography";
import { Container, Section } from "@/components/landing/section";

const principles = [
  {
    label: "Principle",
    statement: "Centralized governance. Decentralized development.",
  },
  {
    label: "Adoption",
    statement:
      "Keep using the agents you already use. Rness makes them understand your organization.",
  },
];

export function Positioning() {
  return (
    <Section id="positioning" className="lg:py-32">
      <Container className="flex flex-col gap-8">
        <Heading size="display" className="max-w-[960px]">
          Your AI agents shouldn&apos;t each have their own understanding of
          your organization.
        </Heading>
        <Lede className="max-w-[760px] sm:text-xl">
          Rness gives your organization one source of truth for agent context,
          rules, decisions and engineering knowledge.
        </Lede>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {principles.map((principle) => (
            <Card
              key={principle.label}
              className="gap-3.5 p-8"
            >
              <Label>{principle.label}</Label>
              <p className="text-[22px] leading-[1.25] font-medium tracking-[-0.015em] text-balance sm:text-[26px]">
                {principle.statement}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
