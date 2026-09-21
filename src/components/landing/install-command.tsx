import { cn } from "@/lib/utils";

/*
 * The one command that starts a workspace. Plain selectable text: a copy
 * button would need a client component for a single line. The prompt sign is
 * decoration and is excluded from the selection, so a triple-click copies the
 * command alone.
 */
export function InstallCommand({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex h-11 items-center gap-3 rounded-md border border-control bg-surface px-4 font-mono text-sm text-bright",
        className
      )}
    >
      <span aria-hidden="true" className="text-brand select-none">
        $
      </span>
      <code>npm create rness</code>
    </p>
  );
}
