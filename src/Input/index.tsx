import { FC } from "react";

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
  onChange: () => void;
  options?: Option[];
  placeholder?: string;
  type?: InputType;
  value?: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  onChange,
  options = [],
  placeholder,
  type = InputType.TEXT,
  value = "",
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {type === InputType.DROPDOWN ? (
        <Dropdown
          id={id}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          id={id}
          name={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;

interface DropdownProps {
  id: string;
  onChange: () => void;
  options: Option[];
  placeholder?: string;
  value?: string;
}

export interface Option {
  label: string;
  value: string;
}

const Dropdown: FC<DropdownProps> = ({
  id,
  onChange,
  options,
  placeholder,
  value,
}) => {
  if (options.length === 0) {
    throw new Error("you must provide options for a dropdown!");
  }

  return (
    <select id={id} name={id} onChange={onChange} value={value}>
      {placeholder && (
        <option disabled value="">
          &lt;{placeholder}&gt;
        </option>
      )}
      {options.map((option: Option, key: number) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
