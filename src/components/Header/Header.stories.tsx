import type { Meta, StoryObj } from "@storybook/react";
import Header from "components/Header";

const meta: Meta<typeof Header> = {
  title: "Display/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "My Business",
  },
  parameters: {
    layout: "fullscreen",
  },
};
