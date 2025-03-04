import { FC, FocusEvent, FormEvent, useState } from "react";

import Dropdown, { Option } from "components/Input/Dropdown";

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
  onChange: (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: Option[];
  placeholder?: string;
  required?: boolean;
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
  required = false,
  type = InputType.TEXT,
  value = "",
}) => {
  const [valid, setValid] = useState<string>("");

  const validate = (
    value: boolean | null | number | string,
    type: InputType,
  ) => {
    console.debug("validation not yet implemented");
    console.debug(`validating ${type} input`);
    if (required && value === "") {
      setValid("Please provider a value as this field is required...");
    }
  };

  const opts: InputProps & {
    className: string;
    onBlur: (
      event: FocusEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
    onFocus: () => void;
  } = {
    className: `${valid !== "" ? "error" : ""} ${required ? "required" : ""}`,
    id,
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { type, value } = event.currentTarget;
      validate(value, type as InputType);
    },
    onChange: onChange,
    onFocus: () => setValid(""),
    placeholder: required && !placeholder ? "Required" : placeholder,
    value: value,
  };

  if (type === InputType.NUMBER) {
    opts.max = max;
    opts.min = min;
  }

  return (
    <div className="input-field">
      <label data-testid="input-label" htmlFor={id}>
        {label ? `${label}:` : ""}
        {type === InputType.DROPDOWN ? (
          <Dropdown {...opts} options={options} />
        ) : (
          <input {...opts} name={id} type={type} />
        )}
      </label>
      <p className="error" data-testid="input-error">{valid}</p>
    </div>
  );
};

export default Input;
