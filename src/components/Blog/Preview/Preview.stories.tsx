import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogPreview from "components/Blog/Preview";

const meta: Meta<typeof BlogPreview> = {
  title: "Display/Blog/Preview",
  component: BlogPreview,
};

export default meta;
type Story = StoryObj<typeof BlogPreview>;

export const Default: Story = {
  args: {
    date: new Date("2024-01-01"),
    excerpt:
      "This is a sample excerpt from the blog post to give readers an idea of the content.",
    title: "Sample Blog Post",
    url: "/blog/sample-post",
  },
};
