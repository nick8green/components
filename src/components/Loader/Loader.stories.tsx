import type { Meta, StoryObj } from "@storybook/react-vite";

import Loader, { LoaderType } from "components/Loader";

const meta: Meta<typeof Loader> = {
  title: "Feedback/Loader",
  component: Loader,
  argTypes: {
    type: {
      options: Object.keys(LoaderType),
      mapping: LoaderType,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "25em",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    args: {
      message: "Loading",
    },
    displayed: true,
  },
};

export const Spinner: Story = {
  args: {
    args: {
      message: "Loading",
    },
    displayed: true,
    type: LoaderType.SPINNER,
  },
};

export const Dots: Story = {
  args: {
    args: {
      message: "Loading",
    },
    displayed: true,
    type: LoaderType.DOTS,
  },
};
