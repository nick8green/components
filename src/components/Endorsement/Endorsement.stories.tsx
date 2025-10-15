import type { Meta, StoryObj } from "@storybook/react-vite";
import Endorcement, { type EndorsementProps } from "components/Endorsement";

const meta: Meta<EndorsementProps> = {
  title: "Display/Endorcement",
  component: Endorcement,
  argTypes: {
    date: {
      control: "date",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Endorcement>;

export const Default: Story = {
  args: {},
};
