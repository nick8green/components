import type { Meta, StoryObj } from "@storybook/react";

import MultiStepForm from "components/MultiStepForm";

const meta: Meta<typeof MultiStepForm> = {
  title: "MultiStepForm",
  component: MultiStepForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MultiStepForm>;

export const Default: Story = {
  args: {
    steps: [() => <p>Step 1</p>, () => <p>Step 2</p>, () => <p>Step 3</p>],
  },
};
