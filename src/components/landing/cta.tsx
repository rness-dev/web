import { ButtonLink } from "@/components/ui/button";
import { Heading, Lede } from "@/components/ui/typography";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/landing/icons";
import { Container, GridBackdrop } from "@/components/landing/section";

export function Cta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-hairline py-24 lg:py-40"
    >
      <GridBackdrop
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 100%, #000 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 100%, #000 10%, transparent 100%)",
        }}
      />

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <Heading size="display" className="max-w-[900px]">
          Give every AI agent the same understanding of your organization.
        </Heading>
        <Lede className="sm:text-xl">
          One source of truth. Every repository. Every agent.
        </Lede>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink size="lg" href="#">
            Get started
            <ArrowRightIcon />
          </ButtonLink>
          <ButtonLink size="lg" variant="outline" href="#">
            View on GitHub
            <ArrowUpRightIcon />
          </ButtonLink>
        </div>

        <p className="mt-4 font-mono text-[13px] text-bright">
          Agents execute. Your organization governs.
        </p>
      </Container>
    </section>
  );
}
