import { FC } from "react";

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

export default Dropdown;