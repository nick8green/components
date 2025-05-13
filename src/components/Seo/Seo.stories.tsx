import type { Meta, StoryObj } from "@storybook/react";
import Seo from "components/Seo";

const meta: Meta<typeof Seo> = {
  title: "Utility/Seo",
  component: Seo,
};

export default meta;
type Story = StoryObj<typeof Seo>;

export const Default: Story = {
  args: {
    description: "This is a description of my business.",
    title: "My Business",
    url: "https://example.com",
  },
};
