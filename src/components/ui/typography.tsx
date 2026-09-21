import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { NotShipped } from "@/components/ui/not-shipped"

/*
 * The page runs on four heading sizes and three supporting text styles. The
 * design is drawn at 1440px; each size steps down twice so the same component
 * holds up on a phone without a second set of rules at the call site.
 */
const headingVariants = cva(
  "font-semibold text-balance text-foreground",
  {
    variants: {
      size: {
        hero: "text-[40px] leading-[1.05] tracking-[-0.03em] sm:text-[56px] lg:text-[72px] lg:leading-[1.02] lg:tracking-[-0.035em]",
        display:
          "text-[34px] leading-[1.08] tracking-[-0.028em] sm:text-[44px] lg:text-[56px] lg:leading-[1.05] lg:tracking-[-0.03em]",
        section:
          "text-[28px] leading-[1.12] tracking-[-0.022em] sm:text-[36px] lg:text-[44px] lg:leading-[1.1] lg:tracking-[-0.025em]",
        sub: "text-[24px] leading-[1.18] tracking-[-0.018em] sm:text-[28px] lg:text-[34px] lg:leading-[1.15] lg:tracking-[-0.02em]",
      },
    },
    defaultVariants: {
      size: "section",
    },
  }
)

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "p"

function Heading({
  className,
  size,
  as: Comp = "h2",
  ...props
}: React.ComponentProps<"h2"> &
  VariantProps<typeof headingVariants> & { as?: HeadingElement }) {
  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
}

/* The numbered section marker, e.g. "03 — Cross-repository governance". */
/*
 * `status="not-shipped"` marks the whole section as ahead of the product
 * (ADR 0009, condition 1): marking is a prop, never a copy edit.
 */
function Eyebrow({
  className,
  status,
  children,
  ...props
}: React.ComponentProps<"div"> & { status?: "not-shipped" }) {
  return (
    <div
      data-slot="eyebrow"
      className={cn(
        "font-mono text-xs font-medium tracking-[0.08em] text-brand uppercase",
        status !== undefined && "flex flex-wrap items-center gap-x-3 gap-y-2",
        className
      )}
      {...props}
    >
      {status === undefined ? children : <span>{children}</span>}
      {status === "not-shipped" ? <NotShipped /> : null}
    </div>
  )
}

const labelVariants = cva(
  "text-xs font-medium tracking-[0.06em] uppercase",
  {
    variants: {
      tone: {
        default: "text-subtle",
        bright: "text-bright",
        brand: "text-brand",
      },
    },
    defaultVariants: { tone: "default" },
  }
)

/* Column and panel headings inside cards — "Scope", "Before", "Drift". */
function Label({
  className,
  tone,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof labelVariants>) {
  return (
    <div
      data-slot="label"
      className={cn(labelVariants({ tone, className }))}
      {...props}
    />
  )
}

/* The standfirst under a heading. */
function Lede({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="lede"
      className={cn(
        "text-[17px] leading-relaxed text-pretty text-muted-foreground sm:text-lg",
        className
      )}
      {...props}
    />
  )
}

export { Heading, Eyebrow, Label, Lede, headingVariants, labelVariants }
