import { ButtonSize, ButtonType, ButtonVariant, ColorScheme } from '../../types';
export interface ButtonProps {
    prefixIcon?: string;
    suffixIcon?: string;
    disabled?: boolean;
    to?: string | Record<string, any>;
    icon?: string;
    loading?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    type?: ButtonType;
    color?: ColorScheme;
    circle?: boolean;
}
