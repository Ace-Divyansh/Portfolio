import type { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  customClass?: string
  style?: CSSProperties
  'aria-label'?: string
  children?: ReactNode
}

export declare const Card: (props: CardProps) => JSX.Element

export interface CardSwapProps {
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

declare const CardSwap: (props: CardSwapProps) => JSX.Element
export default CardSwap
