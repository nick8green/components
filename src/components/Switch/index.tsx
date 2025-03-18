"use client";
import type { FC } from "react";

import "./style.css";

export type ToggleProps = {
  offColour?: string;
  onColour?: string;
  checked?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({
  offColour = "#708090",
  onColour = "#242424",
  checked = false,
  label,
  onChange,
}) => {
  let labelStyle = {},
    inputStyle = {};
  labelStyle = { background: offColour, ":hover": { background: "blue" } };
  inputStyle = { ":checked + label": { background: onColour } };

  return (
    <div className="toggle-switch">
      <input
        checked={checked}
        id={label}
        name={label}
        onChange={(e) => onChange(e.currentTarget.checked)}
        style={inputStyle}
        type="checkbox"
      />
      <label htmlFor={label} style={labelStyle}></label>
    </div>
  );
};

export default Toggle;
