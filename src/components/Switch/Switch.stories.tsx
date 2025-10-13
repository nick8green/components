import { useArgs } from "storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Switch from "components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Interaction/Switch",
  component: Switch,
  args: {
    label: "storybook",
  },
  argTypes: {
    offColour: {
      control: { type: "color" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <Switch
        {...args}
        checked={checked}
        label="storybook"
        onChange={(checked) => updateArgs({ checked })}
      />
    );
  },
};
