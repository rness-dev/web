"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/*
 * Copies `text` and says so for two seconds. The label changes with the state,
 * so a screen reader hears "Copied" from the live region, not only a new icon.
 * Without the Clipboard API (an insecure context) it does nothing: the text
 * next to it stays selectable.
 */
function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // No clipboard access: leave the state alone.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      data-slot="copy-button"
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors outline-none hover:bg-hairline hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {copied ? (
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V6a2 2 0 0 1 2-2h9" />
          </>
        )}
      </svg>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : "Copy command"}
      </span>
    </button>
  )
}

export { CopyButton }
