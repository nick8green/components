import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "Button";
import ButtonGroup from "Button/Group";

const meta: Meta<typeof ButtonGroup> = {
  title: "ButtonGroup",
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
