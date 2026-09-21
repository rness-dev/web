import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/landing/hero";
import { Positioning } from "@/components/landing/positioning";
import { Problem } from "@/components/landing/problem";
import { GovernanceLayer } from "@/components/landing/governance-layer";
import { Capabilities } from "@/components/landing/capabilities";
import { Demo } from "@/components/landing/demo";
import { BeforeAfter } from "@/components/landing/before-after";
import { Category } from "@/components/landing/category";
import { Inheritance } from "@/components/landing/inheritance";
import { Drift } from "@/components/landing/drift";
import { Traceability } from "@/components/landing/traceability";
import { Architecture } from "@/components/landing/architecture";
import { Workflow } from "@/components/landing/workflow";
import { Cli } from "@/components/landing/cli";
import { Trust } from "@/components/landing/trust";
import { Cta } from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Positioning />
        <Problem />
        <GovernanceLayer />
        <Capabilities />
        <Demo />
        <BeforeAfter />
        <Category />
        <Inheritance />
        <Drift />
        <Traceability />
        <Architecture />
        <Workflow />
        <Cli />
        <Trust />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
