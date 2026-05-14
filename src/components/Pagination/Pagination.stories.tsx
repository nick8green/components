import Pagination from '@lib/components/Pagination';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Pagination> = {
  title: 'Interaction/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};
