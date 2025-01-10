import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Input, { InputType } from "components/Input";

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
};
export const Text: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.TEXT,
  },
};
export const Number: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.NUMBER,
  },
};
export const Email: Story = {
  args: {
    id,
    label,
    onChange,
    type: InputType.EMAIL,
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
};
