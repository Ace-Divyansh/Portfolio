// Ambient module declarations for JS-only React components.
// These complement the sidecar .d.ts files in /components/.

// Ambient module declarations for JS-only React components.
// These complement the sidecar .d.ts files in /components/.

declare module "@/components/LogoLoop" {
  import type { ReactNode } from "react"

  type LogoLoopItem =
    | { node: ReactNode; ariaLabel?: string; href?: string }
    | { src: string; alt?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number }

  interface LogoLoopProps {
    logos: LogoLoopItem[]
    speed?: number
    gap?: number
    logoHeight?: number
    fadeOut?: boolean
    fadeOutColor?: string
    ariaLabel?: string
    className?: string
    direction?: "left" | "right" | "up" | "down"
    pauseOnHover?: boolean
    hoverSpeed?: number
    scaleOnHover?: boolean
    style?: import("react").CSSProperties
    width?: number | string
  }

  const LogoLoop: (props: LogoLoopProps) => JSX.Element
  export { LogoLoop }
  export default LogoLoop
}

declare module "@/components/CardSwap" {
  import type { CSSProperties, ReactNode } from "react"

  interface CardProps {
    customClass?: string
    style?: CSSProperties
    "aria-label"?: string
    children?: ReactNode
  }

  export const Card: (props: CardProps) => JSX.Element

  interface CardSwapProps {
    width?: number
    height?: number
    cardDistance?: number
    verticalDistance?: number
    delay?: number
    pauseOnHover?: boolean
    onCardClick?: (index: number) => void
    skewAmount?: number
    easing?: string
    children?: ReactNode
  }

  const CardSwap: (props: CardSwapProps) => JSX.Element
  export default CardSwap
}

