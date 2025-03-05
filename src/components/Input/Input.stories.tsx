import { useArgs } from "@storybook/client-api";
import type { Meta } from "@storybook/react";

import Input, { InputProps, InputType } from "components/Input";
import { FormEvent } from "react";

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

const id = "storybookInput",
  label = "Story Input";

const Template = (args: InputProps) => {
  const [{ value }, updateArgs] = useArgs<InputProps>();
  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => updateArgs({ value: e.currentTarget.value });

  return (
    <Input
      {...args}
      onChange={args.onChange || handleChange}
      value={value}
    />
  );
};

export const Default = {
  args: {
    id,
    label,
    onChange: () => console.log("input changed!"),
  } as InputProps,
  render: Template,
};

export const Dropdown = {
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

export const Text = {
  args: {
    id,
    label,
    type: InputType.TEXT,
  } as InputProps,
  render: Template,
};

export const Numeric = {
  args: {
    id,
    label,
    type: InputType.NUMBER,
  },
  render: Template,
};

export const Email = {
  args: {
    id,
    label,
    type: InputType.EMAIL,
  },
  render: Template,
};

export const Telephone = {
  args: {
    id,
    label,
    max: 10,
    min: 0,
    type: InputType.TELEPHONE,
  },
  render: Template,
};
