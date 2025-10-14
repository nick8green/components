import type { FormEvent } from "react";
import { useArgs } from "storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Input, { type InputProps, InputType } from "components/Input";

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
  label = "Story Input";

const Template = (args: InputProps) => {
  const [{ value }, updateArgs] = useArgs<InputProps>();
  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) =>
    updateArgs({ value: e.currentTarget.value });

  return (
    <Input {...args} onChange={args.onChange || handleChange} value={value} />
  );
};

export const Default: Story = {
  args: {
    id,
    label,
  } as InputProps,
  render: Template,
};

export const Dropdown: Story = {
  args: {
    id,
    label,
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
  } as InputProps,
  render: Template,
};

export const Text: Story = {
  args: {
    id,
    label,
    type: InputType.TEXT,
  } as InputProps,
  render: Template,
};

export const Numeric: Story = {
  args: {
    id,
    label,
    type: InputType.NUMBER,
  },
  render: Template,
};

export const Email: Story = {
  args: {
    id,
    label,
    type: InputType.EMAIL,
  },
  render: Template,
};

export const Telephone: Story = {
  args: {
    id,
    label,
    max: 10,
    min: 0,
    type: InputType.TELEPHONE,
  },
  render: Template,
};
