import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion from "components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Interaction/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Item 1",
        children: <div>Content for Item 1</div>,
      },
      {
        title: "Item 2",
        children: <div>Content for Item 2</div>,
      },
    ],
    title: "Accordion Title",
  },
};
