import * as React from "react"

type IconProps = React.ComponentProps<"svg">

/* Line icons are drawn on a 24px grid, the small UI arrows on a 16px one. */
function Stroke({ size = 22, children, ...props }: IconProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function FragmentedIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M14.5 14.5l5 5" />
      <path d="M19.5 14.5l-5 5" />
    </Stroke>
  )
}

export function DriftIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 12h7" />
      <path d="M10 12l10-6" />
      <path d="M10 12l10 6" />
    </Stroke>
  )
}

export function LostDecisionIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 13l5 5" />
      <path d="M14.5 13l-5 5" />
    </Stroke>
  )
}

export function NoVisibilityIcon(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 5.2A10 10 0 0 1 12 5c5 0 9 4 10 7a11 11 0 0 1-2.7 3.9" />
      <path d="M6.5 6.5A11 11 0 0 0 2 12c1 3 5 7 10 7a9.6 9.6 0 0 0 4.3-1" />
    </Stroke>
  )
}

export function WarningIcon({ size = 14, ...props }: IconProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4" />
      <path d="M12 17.5v.5" />
    </svg>
  )
}

type ArrowProps = IconProps & { size?: number }

function SmallArrow({ size = 16, children, ...props }: ArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon(props: ArrowProps) {
  return (
    <SmallArrow {...props}>
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </SmallArrow>
  )
}

export function ArrowUpRightIcon(props: ArrowProps) {
  return (
    <SmallArrow {...props}>
      <path d="M4.5 11.5l7-7" />
      <path d="M6 4.5h5.5V10" />
    </SmallArrow>
  )
}

export function ArrowUpIcon(props: ArrowProps) {
  return (
    <SmallArrow {...props}>
      <path d="M8 13V3" />
      <path d="M4 7l4-4 4 4" />
    </SmallArrow>
  )
}
