import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion from "components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Interaction/Accordion",
  component: Accordion,
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
      {
        title: "Item 3",
        children: <div>Content for Item 3</div>,
      },
      {
        title: "Item 4",
        children: <div>Content for Item 4</div>,
      },
      {
        title: "Item 5",
        children: <div>Content for Item 5</div>,
      },
    ],
    title: "Accordion Title",
    allowMultipleOpen: false,
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
