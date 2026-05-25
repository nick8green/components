import Header from '@lib/components/Header';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Header> = {
  title: 'Display/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'My Business',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
