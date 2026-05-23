import Button, { ButtonType } from '@lib/components/Button';
import ButtonGroup from '@lib/components/Button/Group';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Interaction/ButtonGroup',
  component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button label="Done!" />
        <Button label="Reset" type={ButtonType.RESET} />
      </>
    ),
  },
};
