import { ColorScheme, Position, ToastSize } from '../../types';
export interface ToastProps {
    position: Position;
    size: ToastSize;
    newestOnTop: boolean;
    timeout: number;
}
export interface Toast {
    message: string;
    color: ColorScheme;
}
