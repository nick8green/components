import type { Meta, StoryObj } from "@storybook/react";
import SocialMediaLink, { Platform } from "components/SocialMediaLink";

const meta: Meta<typeof SocialMediaLink> = {
  title: "Display/SocialMediaLink",
  component: SocialMediaLink,
  argTypes: {
    displayHandle: {
      control: "boolean",
    },
    handle: {
      control: "text",
    },
    platform: {
      options: Object.keys(Platform),
      mapping: Platform,
    },
    url: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialMediaLink>;

export const Default: Story = {
  args: {
    handle: "My Social Media",
    platform: Platform.Facebook,
    url: "https://www.facebook.com",
  },
};
