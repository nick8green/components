import { FC } from '../../node_modules/react';

export declare enum ButtonType {
    NORMAL = "button",
    RESET = "reset",
    SUBMIT = "submit"
}
export interface ButtonProps {
    disabled?: boolean;
    label: string;
    onClick?: () => void;
    type?: ButtonType;
}
declare const Button: FC<ButtonProps>;
export default Button;
