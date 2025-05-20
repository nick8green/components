import type { FC } from "react";

import "./style.css";

export enum ButtonType {
  NORMAL = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export type ButtonProps = {
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  type?: ButtonType;
};

export const Button: FC<ButtonProps> = ({
  disabled = false,
  label,
  onClick = () => null,
  type = ButtonType.NORMAL,
}) => {
  return (
    <button
      data-testid={label
        .replaceAll(/&[a-z]+;/g, "")
        .replaceAll(/ +/g, " ")
        .replaceAll(/[^a-zA-Z\d\s\-:]/g, "")
        .trim()
        .replaceAll(" ", "-")
        .toLowerCase()}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
