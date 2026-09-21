import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Node, NodeArrow, NodeConnector, NodeRail } from "@/components/ui/node";
import {
  Terminal,
  TerminalBar,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
} from "@/components/ui/terminal";
import { Eyebrow, Heading, Label, Lede } from "@/components/ui/typography";
import { Container, SplitRow } from "@/components/landing/section";
import { cn } from "@/lib/utils";

/* Each capability is one 5fr/7fr row; the rule above separates it from the last. */
function CapabilityRow({
  first = false,
  ...props
}: React.ComponentProps<typeof SplitRow> & { first?: boolean }) {
  return (
    <Container
      className={cn("py-16 lg:py-24", !first && "border-t border-hairline")}
    >
      <SplitRow {...props} />
    </Container>
  );
}

function CrossRepositoryMedia() {
  return (
    <Terminal>
      <TerminalBar title="github.com/acme/" />
      <TerminalBody className="pt-4 pb-5">
        <TerminalLine className="font-semibold text-brand">
          .rness
          <Badge variant="brand" className="ml-auto">
            organization source of truth
          </Badge>
        </TerminalLine>
        {["app1", "app2", "sdk", "contracts", "infrastructure"].map((repo) => (
          <TerminalLine key={repo}>{repo}</TerminalLine>
        ))}
        <TerminalLine className="text-dim">…</TerminalLine>
      </TerminalBody>
      <div className="flex flex-col border-t border-hairline bg-background px-6 pt-[18px] pb-[22px]">
        <TerminalLine>
          <TerminalPrompt />
          rness context --scope app1
        </TerminalLine>
        <TerminalLine>
          <TerminalPrompt />
          rness context --scope app2
        </TerminalLine>
        <TerminalLine className="mt-2 text-muted-foreground">
          Same organizational context. Different repository.
        </TerminalLine>
      </div>
    </Terminal>
  );
}

function CrossAgentMedia() {
  return (
    <Card className="items-center px-4 py-9 lg:px-0">
      <div className="flex w-full max-w-[540px] flex-col items-center">
        <Node variant="brand" className="min-h-11 px-5 font-semibold">
          rness
        </Node>
        <NodeConnector />
        <Label>organizational truth</Label>
        <NodeConnector />
        <NodeRail className="max-w-[360px]" />
        <div className="grid w-full grid-cols-3">
          {["Claude Code", "Codex", "Cursor"].map((agent) => (
            <div key={agent} className="flex flex-col items-center">
              <NodeConnector />
              <Node className="px-3">{agent}</Node>
              <NodeConnector />
              <Node variant="dashed" className="px-3 text-xs">
                existing workflow
              </Node>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

const contextTree = [
  { branch: "├── ", name: "Product context", tag: "inherited" as const },
  { branch: "├── ", name: "Engineering principles", tag: "inherited" as const },
  { branch: "├── ", name: "Security policies", tag: "inherited" as const },
  { branch: "├── ", name: "Architecture principles", tag: "inherited" as const },
];

const contextRepositories = [
  { branch: "├── ", child: "│   └── ", name: "app1" },
  { branch: "├── ", child: "│   └── ", name: "app2" },
  { branch: "└── ", child: "    └── ", name: "app3" },
];

function ContextMedia() {
  return (
    <Terminal>
      <TerminalBar title="context" />
      <TerminalBody className="pt-4 pb-5">
        <TerminalLine className="font-semibold text-foreground">
          Organization
        </TerminalLine>
        {contextTree.map((row) => (
          <TerminalLine key={row.name}>
            <span className="text-dim">{row.branch}</span>
            {row.name}
            <Badge variant="brand" className="ml-auto">
              {row.tag}
            </Badge>
          </TerminalLine>
        ))}
        <TerminalLine className="text-dim">│</TerminalLine>
        {contextRepositories.map((repo) => (
          <div key={repo.name} className="contents">
            <TerminalLine>
              <span className="text-dim">{repo.branch}</span>
              <span className="text-foreground">{repo.name}</span>
            </TerminalLine>
            <TerminalLine>
              <span className="text-dim">{repo.child}</span>
              repository-specific context
              <Badge className="ml-auto">local</Badge>
            </TerminalLine>
          </div>
        ))}
      </TerminalBody>
    </Terminal>
  );
}

const policyTree = [
  { branch: "├── ", name: "Security", bright: true },
  { branch: "│   ├── ", name: "secrets policy" },
  { branch: "│   ├── ", name: "dependency policy" },
  { branch: "│   └── ", name: "smart contract policy" },
  { branch: "├── ", name: "Engineering", bright: true },
  { branch: "│   ├── ", name: "testing" },
  { branch: "│   ├── ", name: "TypeScript" },
  { branch: "│   └── ", name: "Git" },
  { branch: "└── ", name: "Architecture", bright: true },
  { branch: "    ├── ", name: "API standards" },
  { branch: "    └── ", name: "data standards" },
];

const policyScopes = ["Organization", "Repository", "Directory", "File / pattern"];

function PolicyMedia() {
  return (
    <Terminal>
      <TerminalBar title="policies" />
      <TerminalBody className="pt-4 pb-5">
        <TerminalLine className="font-semibold text-foreground">
          Organization
        </TerminalLine>
        {policyTree.map((row) => (
          <TerminalLine key={row.branch + row.name}>
            <span className="text-dim">{row.branch}</span>
            <span className={row.bright ? "text-foreground" : undefined}>
              {row.name}
            </span>
          </TerminalLine>
        ))}
      </TerminalBody>
      <div className="flex flex-col gap-3 border-t border-hairline px-6 pt-[18px] pb-[22px]">
        <Label>Scope</Label>
        <div className="flex flex-wrap items-center gap-2.5">
          {policyScopes.map((scope, index) => (
            <div key={scope} className="flex items-center gap-2.5">
              {index > 0 ? <NodeArrow /> : null}
              <Node className="min-h-[34px] px-3 text-[12.5px]">{scope}</Node>
            </div>
          ))}
        </div>
      </div>
    </Terminal>
  );
}

const decisions = [
  { id: "adr/0001", title: "PostgreSQL is the primary database", scope: "Organization" },
  { id: "adr/0014", title: "GraphQL is the public API", scope: "app1" },
  { id: "adr/0021", title: "Use viem for EVM interaction", scope: "contracts" },
];

function DecisionsMedia() {
  return (
    <Terminal>
      <TerminalBar title="decisions" />
      <div className="flex flex-col px-6 py-2">
        {decisions.map((decision, index) => (
          <div
            key={decision.id}
            className={cn(
              "flex flex-wrap items-center justify-between gap-4 py-4",
              index < decisions.length - 1 && "border-b border-hairline"
            )}
          >
            <div className="flex items-center gap-4">
              <span className="w-[72px] font-mono text-[13px] text-brand">
                {decision.id}
              </span>
              <span className="text-[15px]">{decision.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="brand">Accepted</Badge>
              <Badge>{decision.scope}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Terminal>
  );
}

const planningChain = ["Product", "Spec", "Plan", "Implementation"];

const planningDocuments = [
  { id: "specs/0012", title: "Unified lending API" },
  { id: "plans/0027", title: "Implement Morpho adapter" },
  { id: "adr/0031", title: "Standardize market identifiers" },
];

function PlanningMedia() {
  return (
    <Card className="grid gap-10 p-8 md:grid-cols-[200px_1fr] md:items-center">
      <div className="flex flex-col items-center">
        {planningChain.map((step) => (
          <div key={step} className="contents">
            <Node className="w-40">{step}</Node>
            <NodeConnector className="h-5" />
          </div>
        ))}
        <Node variant="brand" className="w-40">
          Agent
        </Node>
      </div>
      <div className="flex flex-col gap-3">
        {planningDocuments.map((document) => (
          <div
            key={document.id}
            className="flex flex-col gap-1 rounded-lg border border-border bg-surface-raised px-[18px] py-3.5"
          >
            <span className="font-mono text-xs text-brand">{document.id}</span>
            <span className="text-[15px] font-medium">{document.title}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-hairline">
      <CapabilityRow first media={<CrossRepositoryMedia />}>
        <Eyebrow>03 — Cross-repository governance</Eyebrow>
        <Heading as="h3" size="sub">
          One organization. Every repository.
        </Heading>
        <Lede>
          Define shared context and governance once. Apply it across every
          repository in the organization.
        </Lede>
        <p className="text-[15px] leading-relaxed text-subtle">
          The repositories remain independent. Rness provides the organizational
          context around them.
        </p>
      </CapabilityRow>

      <CapabilityRow reverse media={<CrossAgentMedia />}>
        <Eyebrow>04 — Cross-agent governance</Eyebrow>
        <Heading as="h3" size="sub">
          Define once. Govern every agent.
        </Heading>
        <Lede>
          Claude Code remains Claude Code. Codex remains Codex. Cursor remains
          Cursor. Rness provides the shared organizational layer around them.
        </Lede>
        <p className="text-lg leading-[1.4] font-semibold tracking-[-0.01em]">
          No new agent. No new workflow. No new configuration format.
        </p>
      </CapabilityRow>

      <CapabilityRow media={<ContextMedia />}>
        <Eyebrow>05 — Organization-wide context</Eyebrow>
        <Heading as="h3" size="sub">
          Give every agent the context it needs — without duplicating it
          everywhere.
        </Heading>
        <Lede>
          Organization-level context is inherited by every repository. Each
          repository adds only what is specific to it.
        </Lede>
      </CapabilityRow>

      <CapabilityRow reverse media={<PolicyMedia />}>
        <Eyebrow>06 — Policy enforcement</Eyebrow>
        <Heading as="h3" size="sub">
          Turn engineering standards into organizational policy.
        </Heading>
        <Lede>
          Policies carry a scope — organization, repository, directory or file
          pattern — so the right rule applies at the right level.
        </Lede>
        <p className="text-[15px] leading-relaxed text-subtle">
          Native agent configuration files stay where they are. Rness does not
          ask developers to replace them.
        </p>
      </CapabilityRow>

      <CapabilityRow media={<DecisionsMedia />}>
        <Eyebrow>07 — Architecture memory</Eyebrow>
        <Heading as="h3" size="sub">
          Your agents should understand not only what to do — but why.
        </Heading>
        <Lede>
          Architecture decisions become organizational memory instead of
          isolated documents — and reach the agents implementing them.
        </Lede>
      </CapabilityRow>

      <CapabilityRow reverse media={<PlanningMedia />}>
        <Eyebrow>08 — Plans and specifications</Eyebrow>
        <Heading as="h3" size="sub">
          Connect what you&apos;re building to why you&apos;re building it.
        </Heading>
        <Lede>
          Specs, plans and decisions are linked — so an agent implementing a
          plan knows the spec behind it and the decisions that constrain it.
        </Lede>
        <p className="text-[15px] leading-relaxed text-subtle">
          Rness connects the knowledge agents need before and during
          implementation.
        </p>
      </CapabilityRow>
    </section>
  );
}
