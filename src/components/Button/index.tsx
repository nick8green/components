import type { FC, PropsWithChildren } from "react";

import "./style.css";

export enum ButtonType {
  NORMAL = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  type?: ButtonType;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  disabled = false,
  label,
  onClick = () => null,
  type = ButtonType.NORMAL,
}) => {
  return (
    <button
      className={className}
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
      {children ?? label}
    </button>
  );
};

export default Button;
