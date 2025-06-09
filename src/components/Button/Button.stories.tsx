import type { Meta, StoryObj } from "@storybook/react-vite";
import Button, { ButtonType } from "components/Button";

const meta: Meta<typeof Button> = {
  title: "Interaction/Button",
  component: Button,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    type: {
      options: Object.keys(ButtonType),
      mapping: ButtonType,
      labels: {
        Normal: "button",
        Submit: "submit",
        Reset: "reset",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click me!",
    onClick: () => console.log("button clicked!"),
    disabled: false,
  },
};
