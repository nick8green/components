import { FC } from '../../node_modules/react';
import { Option } from 'Input/Dropdown';

export declare enum InputType {
    DROPDOWN = "dropdown",
    EMAIL = "email",
    NUMBER = "number",
    TELEPHONE = "telephone",
    TEXT = "text"
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
declare const Input: FC<InputProps>;
export default Input;
