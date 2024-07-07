import { FC } from '../../../node_modules/react';

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
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
