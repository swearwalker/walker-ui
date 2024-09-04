import { ColorScheme, ToggleLabelPosition, ToggleSize } from '@/types'

export interface ToggleProps {
  color?: ColorScheme
  disabled?: boolean
  label?: string
  smallRound?: boolean
  size?: ToggleSize
  labelPosition?: ToggleLabelPosition
}
