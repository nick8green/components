import { FC } from "react";

import "./style.css";

export enum ButtonType {
  NORMAL = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  label,
  onClick = () => null,
  type = ButtonType.NORMAL,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
