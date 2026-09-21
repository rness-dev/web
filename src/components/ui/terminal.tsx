import * as React from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

/*
 * The window frame the design uses for shell sessions, file trees and record
 * lists: a card with a title bar of three inert dots and a monospaced caption.
 * The dots are decoration, so they stay out of the accessibility tree.
 */
function Terminal({ className, ...props }: React.ComponentProps<typeof Card>) {
  return <Card data-slot="terminal" className={cn(className)} {...props} />
}

function TerminalBar({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & { title?: string }) {
  return (
    <div
      data-slot="terminal-bar"
      className={cn(
        "flex h-10 shrink-0 items-center gap-2 border-b border-hairline px-4",
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <TerminalDots />
          {title ? (
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              {title}
            </span>
          ) : null}
        </>
      )}
    </div>
  )
}

function TerminalDots({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="terminal-dots"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      <span className="size-2.5 rounded-full bg-[#26262b]" />
      <span className="size-2.5 rounded-full bg-[#26262b]" />
      <span className="size-2.5 rounded-full bg-[#26262b]" />
    </span>
  )
}

function TerminalBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-body"
      className={cn("flex flex-col px-6 pt-4 pb-5", className)}
      {...props}
    />
  )
}

/*
 * One line of shell or tree output. `whitespace-pre` is deliberate: the tree
 * glyphs and column alignment in the design are spaces, not layout.
 */
function TerminalLine({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="terminal-line"
      className={cn(
        "flex items-center font-mono text-[13.5px] leading-[1.8] whitespace-pre text-zinc-300",
        className
      )}
      {...props}
    />
  )
}

/* The dimmed `$ ` or `> ` that opens a command line. */
function TerminalPrompt({
  symbol = "$",
  className,
  ...props
}: React.ComponentProps<"span"> & { symbol?: string }) {
  return (
    <span
      data-slot="terminal-prompt"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {symbol}{" "}
    </span>
  )
}

/* A gap between blocks of output, matching the design's 16px rhythm. */
function TerminalGap({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="terminal-gap"
      className={cn("h-4", className)}
      {...props}
    />
  )
}

export {
  Terminal,
  TerminalBar,
  TerminalDots,
  TerminalBody,
  TerminalLine,
  TerminalPrompt,
  TerminalGap,
}
