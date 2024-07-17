import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Modal, { ModalType } from "components/Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ height: "25em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      options: Object.keys(ModalType),
      mapping: ModalType,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h1>This is a modal display</h1>
        <p>This is where we display overlay messages</p>
      </>
    ),
    close: fn(),
    visible: true,
  },
};
