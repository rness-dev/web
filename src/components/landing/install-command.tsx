import { Tabs } from "@base-ui/react/tabs";

import { CopyButton } from "@/components/ui/copy-button";
import {
  Terminal,
  TerminalBody,
  TerminalDots,
  TerminalLine,
  TerminalPrompt,
} from "@/components/ui/terminal";
import {
  BunIcon,
  NpmIcon,
  PnpmIcon,
  YarnIcon,
} from "@/components/landing/icons";
import { cn } from "@/lib/utils";

/*
 * Every manager here was run against the published shim: each resolves
 * `create-rness`, and the CLI sets the workspace up with the manager that
 * launched it. A manager that was not verified gets no tab.
 */
const managers = [
  { id: "npm", command: "npm create rness", Icon: NpmIcon },
  { id: "pnpm", command: "pnpm create rness", Icon: PnpmIcon },
  { id: "yarn", command: "yarn create rness", Icon: YarnIcon },
  { id: "bun", command: "bun create rness", Icon: BunIcon },
];

/*
 * The one command that starts a workspace, in the design's terminal window.
 * The tabs are Base UI's (arrow keys, roving focus, ARIA); the only client
 * code of our own is the copy button, given its command as a prop.
 */
export function InstallCommand({ className }: { className?: string }) {
  return (
    <Terminal className={cn("w-full max-w-[460px] text-left", className)}>
      <Tabs.Root defaultValue="npm">
        <Tabs.List
          aria-label="Package manager"
          className="flex h-10 items-stretch gap-1 overflow-x-auto border-b border-hairline px-4"
        >
          {/* The window's dots give way to the tabs on a phone. */}
          <TerminalDots className="mr-3 hidden self-center sm:flex" />
          {managers.map(({ id, Icon }) => (
            <Tabs.Tab
              key={id}
              value={id}
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 border-b-2 border-transparent px-2.5 font-mono text-xs text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 data-[active]:border-brand data-[active]:text-foreground"
            >
              <Icon />
              {id}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {managers.map(({ id, command }) => (
          <Tabs.Panel key={id} value={id}>
            <TerminalBody className="flex-row items-center justify-between gap-3 py-3 pr-3 pl-5">
              <TerminalLine className="min-w-0 overflow-x-auto text-bright">
                <TerminalPrompt className="text-brand select-none" />
                <code>{command}</code>
              </TerminalLine>
              <CopyButton text={command} />
            </TerminalBody>
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </Terminal>
  );
}
