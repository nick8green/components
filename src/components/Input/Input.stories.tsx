import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FormEvent } from "react";

import Input, { InputType } from "components/Input";
import { useArgs } from "@storybook/client-api";

const meta: Meta<typeof Input> = {
  title: "Interaction/Input",
  component: Input,
  argTypes: {
    label: {
      control: "text",
    },
    type: {
      options: Object.keys(InputType).filter((o) => o !== "DROPDOWN"),
      mapping: InputType,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const id = "storybookInput",
  label = "Story Input",
  onChange = fn();

export const Default: Story = {
  args: {
    id,
    label,
    onChange: () => console.log("input changed!"),
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
export const Dropdown: Story = {
  args: {
    id,
    label,
    onChange,
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
    placeholder: "choose and option",
    type: InputType.DROPDOWN,
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
export const Text: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.TEXT,
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
export const Numeric: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.NUMBER,
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
export const Email: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.EMAIL,
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
export const Telephone: Story = {
  args: {
    id,
    label,
    max: 10,
    min: 0,
    onChange,
    type: InputType.TELEPHONE,
  },
  render: ({ ...args }) => {
    const [{ value }, updateArgs] = useArgs();
    const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

    return (
      <Input
        {...args}
        onChange={handleChange}
        value={value}
      />
    );
  },
};
