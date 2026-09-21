import * as React from "react"

import { cn } from "@/lib/utils"

/* The 1200px column every band of the page is drawn inside. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-10", className)}
      {...props}
    />
  )
}

/* A full-width band: hairline above, the design's 120px vertical rhythm. */
function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("border-t border-hairline py-20 lg:py-[120px]", className)}
      {...props}
    />
  )
}

/*
 * The alternating copy/diagram row used through the capability sections. The
 * copy always comes first in the DOM; `reverse` only moves the diagram to the
 * left column once there is room for two columns.
 */
function SplitRow({
  media,
  reverse = false,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  media: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:gap-[72px]",
        reverse ? "lg:grid-cols-[7fr_5fr]" : "lg:grid-cols-[5fr_7fr]",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-5", reverse && "lg:order-last")}>
        {children}
      </div>
      <div className={cn("min-w-0", reverse && "lg:order-first")}>{media}</div>
    </div>
  )
}

/* The 48px grid that fades in behind the hero and the closing call to action. */
function GridBackdrop({
  className,
  ...props
}: React.ComponentProps<"div"> & { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("grid-backdrop pointer-events-none absolute inset-0", className)}
      {...props}
    />
  )
}

export { Container, Section, SplitRow, GridBackdrop }
