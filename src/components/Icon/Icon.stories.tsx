import type { Meta, StoryObj } from "@storybook/react-vite";
import Icon, { type IconProps } from "components/Icon";
import { iconRegistry } from "lib/icons";

const meta: Meta<IconProps> = {
  title: "Display/Icon",
  component: Icon,
  argTypes: {
    pack: {
      control: "select",
      options: ["solid", "brands"],
    },
    name: {
      control: "select",
      description: "The name of the icon required.",
      options: [
        ...Object.keys(iconRegistry.solid),
        ...Object.keys(iconRegistry.brands),
      ],
    },
  },
  args: {
    pack: "solid",
    name: "home",
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
};
