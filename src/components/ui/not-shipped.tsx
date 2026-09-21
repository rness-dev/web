import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/*
 * ADR 0009, condition 1: whatever the page shows that the CLI does not do
 * today carries this marker. One wording everywhere — the ADR's own — so a
 * visitor learns it once. Remove the marker when the thing ships.
 */
function NotShipped({ className }: { className?: string }) {
  return (
    <Badge
      variant="target"
      data-slot="not-shipped"
      title="Specified, not built yet — not in @rness/cli today"
      className={cn("tracking-[0.02em] normal-case", className)}
    >
      not shipped yet
    </Badge>
  )
}

export { NotShipped }
