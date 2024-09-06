import { ColorScheme, Direction, TabsPosition } from '../../types'

export interface Tab {
  label: string
  value: string | number
  hidden?: boolean
  disabled?: boolean
  [key: string]: any
}

export interface TabsProps {
  tabs: Record<string, Tab>[]
  direction?: Direction
  color?: ColorScheme
  position?: TabsPosition
  tabLabel?: string
  tabValue?: string
  compact?: boolean
  flexible?: boolean
}
