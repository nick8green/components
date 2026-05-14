import Switch from '@lib/components/Switch';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';

const meta: Meta<typeof Switch> = {
  title: 'Interaction/Switch',
  component: Switch,
  args: {
    label: 'storybook',
  },
  argTypes: {
    offColour: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Render = ({ ...args }) => {
  const [{ checked }, updateArgs] = useArgs();
  return (
    <Switch
      {...args}
      checked={checked}
      label="storybook"
      onChange={(isChecked) => updateArgs({ isChecked })}
    />
  );
};

export const Default: Story = {
  args: {},
  render: Render,
};
