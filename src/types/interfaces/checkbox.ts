import { ColorScheme } from '../../types'

export interface CheckboxProps {
  id: string
  label?: string
  color?: ColorScheme
  compact?: boolean
  outlined?: boolean
  disabled?: boolean
}
