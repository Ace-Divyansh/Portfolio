import type { ReactNode } from 'react'

export type LogoLoopItem =
  | { node: ReactNode; ariaLabel?: string; href?: string }
  | { src: string; alt?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number }

export interface LogoLoopProps {
  logos: LogoLoopItem[]
  speed?: number
  gap?: number
  logoHeight?: number
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  pauseOnHover?: boolean
  hoverSpeed?: number
  scaleOnHover?: boolean
  renderItem?: (item: LogoLoopItem, key: string) => ReactNode
  style?: React.CSSProperties
  width?: number | string
}

declare const LogoLoop: (props: LogoLoopProps) => JSX.Element
export { LogoLoop }
export default LogoLoop
