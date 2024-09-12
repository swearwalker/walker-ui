import { ColorScheme, Direction } from '../../types'

export interface RadioProps {
  id: string | number
  value: string | number
  label?: string
  color?: ColorScheme
  compact?: boolean
  outlined?: boolean
  disabled?: boolean
}

export interface RadioGroupProps {
  options: Record<string, RadioOption>[]
  compact?: boolean
  direction?: Direction
  label?: string
  value?: string
  color?: ColorScheme
}

export interface RadioOption {
  id?: string
  label: string
  value: string | number
  hidden?: boolean
  disabled?: boolean
  [key: string]: any
}
