import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogList from "components/Blog/List";

const meta: Meta<typeof BlogList> = {
  title: "Display/Blog/List",
  component: BlogList,
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BlogList>;

export const Default: Story = {
  args: {
    posts: [
      {
        date: new Date("2024-01-01"),
        excerpt:
          "This is a sample excerpt from the blog post to give readers an idea of the content.",
        title: "One More Blog Post",
        url: "/blog/one-more-blog-post",
      },
      {
        date: new Date("2024-02-01"),
        excerpt:
          "This is a sample excerpt from the blog post to give readers an idea of the content.",
        title: "Another Sample Blog Post",
        url: "/blog/another-sample-post",
      },
      {
        date: new Date("2024-03-01"),
        excerpt:
          "This is a sample excerpt from the blog post to give readers an idea of the content.",
        title: "Sample Blog Post",
        url: "/blog/sample-post",
      },
    ],
    postsPerPage: 2,
    title: "",
  },
};
