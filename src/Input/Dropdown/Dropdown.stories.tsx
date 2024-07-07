import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Dropdown from "Input/Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const id = "storybookInput",
  onChange = fn();

export const Default: Story = {
  args: {
    id,
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
  },
};
