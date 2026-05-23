'use client';
import './style.css';

import Dropdown, { type Option } from '@lib/components/Input/Dropdown';
import { type ChangeEvent, type FC, type FocusEvent, useState } from 'react';

export enum InputType {
  DROPDOWN = 'dropdown',
  EMAIL = 'email',
  NUMBER = 'number',
  TELEPHONE = 'telephone',
  TEXT = 'text',
}

export interface InputProps {
  id: string;
  label?: string;
  max?: number;
  min?: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
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
  value = '',
}) => {
  const [valid, setValid] = useState<string>('');

  const validate = (v: boolean | null | number | string, t: InputType) => {
    console.debug('validation not yet implemented');
    console.debug(`validating ${t} input`);
    if (required && v === '') {
      setValid('Please provider a value as this field is required...');
    }
  };

  const opts: {
    className: string;
    id: string;
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onFocus: () => void;
    placeholder?: string;
    value: string;
  } = {
    className: `${valid !== '' ? 'error' : ''} ${required ? 'required' : ''}`,
    id,
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { type: t, value: v } = event.currentTarget;
      validate(v, t as InputType);
    },
    onChange,
    onFocus: () => setValid(''),
    placeholder: required && !placeholder ? 'Required' : placeholder,
    value,
  };

  if (type === InputType.NUMBER) {
    // number-specific constraints are applied directly to the input element below
  }

  return (
    <div className="input-field">
      <label data-testid="input-label" htmlFor={id}>
        {label ? `${label}:` : ''}
        {type === InputType.DROPDOWN ? (
          <Dropdown
            id={opts.id}
            onChange={(e) => onChange(e)}
            options={options}
            placeholder={opts.placeholder}
            value={opts.value}
          />
        ) : (
          <input {...opts} max={max} min={min} name={id} type={type} />
        )}
      </label>
      <p className="error" data-testid="input-error">
        {valid}
      </p>
    </div>
  );
};

export default Input;
