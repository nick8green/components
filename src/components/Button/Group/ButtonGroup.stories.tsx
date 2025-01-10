import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonType } from "components/Button";
import ButtonGroup from "components/Button/Group";

const meta: Meta<typeof ButtonGroup> = {
  title: "Interaction/ButtonGroup",
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
