import type { Meta, StoryObj } from "@storybook/react";

import Loader, { LoaderType } from "components/Loader";

const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
  argTypes: {
    type: {
      options: Object.keys(LoaderType),
      mapping: LoaderType,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "25em" }}>
        <Story />
      </div>
    ),
  ],
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
