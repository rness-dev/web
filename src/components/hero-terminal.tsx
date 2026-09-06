const loadedFiles = [
  "org/projects/lendwise/overview.md",
  "org/projects/lendwise/marketing.md",
  "org/decisions/0004-positioning.md",
];

export function HeroTerminal() {
  return (
    <div
      id="example"
      className="w-full max-w-3xl overflow-hidden rounded-[10px] border border-white/12 bg-card shadow-[0_20px_60px_rgba(0,0,0,.35)]"
    >
      <div className="flex h-[38px] items-center gap-4 border-b border-white/8 bg-[#1b1f23] px-4">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <span className="font-mono text-[11.5px] text-[#6b7278]">
          rness — demo
        </span>
      </div>

      <div className="px-5 py-5 font-mono text-[13.5px] leading-[1.75] sm:px-6 sm:py-6">
        <div className="break-words">
          <span className="text-[#6b7278]">$ </span>
          <span className="text-foreground">rness ask </span>
          <span className="text-primary">
            &quot;Prepare a launch brief for Lendwise using only confirmed
            project facts.&quot;
          </span>
        </div>

        <div className="h-3.5" />

        <div className="text-muted-foreground">→ loading org context…</div>
        {loadedFiles.map((file) => (
          <div key={file} className="pl-4 text-muted-foreground">
            {file} <span className="text-primary">✓</span>
          </div>
        ))}

        <div className="h-3.5" />

        <div className="text-muted-foreground">
          → grounded in 3 files. generating brief…
        </div>

        <div className="h-3.5" />

        <div className="font-semibold text-foreground">
          # Lendwise — Launch Brief
        </div>
        <div className="text-[#c7cbce]">
          - Positioning: confirmed in decision 0004
        </div>
        <div className="text-[#c7cbce]">- Target segment: from overview.md</div>
        <div className="text-[#c7cbce]">
          - Key message: from marketing.md
          <span className="animate-blink text-primary">▌</span>
        </div>
      </div>
    </div>
  );
}
