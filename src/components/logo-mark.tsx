export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="14" y1="14" x2="5" y2="5" stroke="#57a99a" strokeWidth="1.4" />
      <line x1="14" y1="14" x2="23" y2="5" stroke="#57a99a" strokeWidth="1.4" />
      <line x1="14" y1="14" x2="5" y2="23" stroke="#57a99a" strokeWidth="1.4" />
      <rect
        x="9"
        y="9"
        width="10"
        height="10"
        rx="2"
        fill="#14171a"
        stroke="#f2f3f4"
        strokeWidth="1.4"
      />
      <circle cx="5" cy="5" r="2.6" fill="#0c0e10" stroke="#57a99a" strokeWidth="1.4" />
      <circle cx="23" cy="5" r="2.6" fill="#0c0e10" stroke="#57a99a" strokeWidth="1.4" />
      <circle cx="5" cy="23" r="2.6" fill="#0c0e10" stroke="#57a99a" strokeWidth="1.4" />
    </svg>
  );
}
