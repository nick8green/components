import type { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import MultiStepForm, { type StepProps } from "components/MultiStepForm";

const meta: Meta<typeof MultiStepForm> = {
  title: "Interaction/MultiStepForm",
  component: MultiStepForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MultiStepForm>;

export const Default: Story = {
  render: () => (
    <MultiStepForm
      done={(data) => {
        const d = data || {};
        alert(
          `data collected...\n  - ${Object.keys(d)
            .map((key) => `${key}: ${d[key]}`)
            .join("\n  - ")}`,
        );
      }}
    >
      <PersonalDetails />
      <AccountDetails />
      <AccountSummary />
    </MultiStepForm>
  ),
};

const PersonalDetails: FC<StepProps> = ({
  firstname,
  lastname,
  handleChange,
}) => {
  return (
    <div>
      <h3>Personal Details</h3>
      <div>
        <input
          type="text"
          name="firstname"
          value={firstname as string}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          value={lastname as string}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>
    </div>
  );
};

const AccountDetails: FC<StepProps> = ({ username, handleChange }) => {
  return (
    <div>
      <h3>Account Details</h3>
      <div>
        <input
          type="text"
          name="username"
          value={username as string}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
    </div>
  );
};

const AccountSummary: FC<StepProps> = ({ username, firstname, lastname }) => {
  return (
    <div>
      <h3>Account Summary</h3>
      <p>
        <b>First Name:</b> {firstname as string}
      </p>
      <p>
        <b>Last Name:</b> {lastname as string}
      </p>
      <p>
        <b>Username:</b> {username as string}
      </p>
    </div>
  );
};
