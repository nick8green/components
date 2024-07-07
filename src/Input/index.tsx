import { FC } from "react";

import Dropdown, { Option } from "Input/Dropdown";

import "./style.css";

export enum InputType {
  DROPDOWN = "dropdown",
  EMAIL = "email",
  NUMBER = "number",
  TELEPHONE = "telephone",
  TEXT = "text",
}

export interface InputProps {
  id: string;
  label?: string;
  max?: number;
  min?: number;
  onChange: () => void;
  options?: Option[];
  placeholder?: string;
  type?: InputType;
  value?: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  max,
  min,
  onChange,
  options = [],
  placeholder,
  type = InputType.TEXT,
  value = "",
}) => {
    const opts: any = {
        id: id,
        onChange: onChange,
        placeholder: placeholder,
        value: value,
    };

    if (type === InputType.NUMBER) {
        opts.max = max;
        opts.min = min;
    }

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {type === InputType.DROPDOWN ? (
        <Dropdown
            {...opts}
          options={options}
        />
      ) : (
        <input
         {...opts}
          name={id}
          type={type}
        />
      )}
    </div>
  );
};

export default Input;
