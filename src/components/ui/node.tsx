import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/*
 * The building blocks of the architecture diagrams: a labelled box plus the
 * rules that join boxes together. `brand` marks Rness itself, `dashed` marks
 * something Rness leaves untouched (an existing agent workflow).
 */
const nodeVariants = cva(
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-4 text-[13px] whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "border-control bg-surface-raised text-bright",
        brand: "border-brand bg-brand-surface text-brand",
        dashed:
          "border-dashed border-control bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Node({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof nodeVariants>) {
  return (
    <div
      data-slot="node"
      className={cn(nodeVariants({ variant, className }))}
      {...props}
    />
  )
}

/* The vertical rule that drops from one node to the next. */
function NodeConnector({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="node-connector"
      className={cn("h-7 w-px shrink-0 bg-control", className)}
      {...props}
    />
  )
}

/* The horizontal rule a node branches across. Width comes from the call site. */
function NodeRail({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      data-slot="node-rail"
      className={cn("h-px w-full max-w-[640px] bg-control", className)}
      {...props}
    />
  )
}

/* The dim arrow between nodes laid out in a row. */
function NodeArrow({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="node-arrow"
      className={cn("text-dim", className)}
      {...props}
    >
      →
    </span>
  )
}

export { Node, NodeConnector, NodeRail, NodeArrow, nodeVariants }
