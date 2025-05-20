import type { Meta, StoryObj } from "@storybook/react";
import Header from "components/Header";
// import { Platform } from "components/SocialMediaLink";

const meta: Meta<typeof Header> = {
  title: "Display/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "My Business",
    // socials: [
    //   {
    //     handle: "Facebook Profile",
    //     platform: Platform.Facebook,
    //     url: "#",
    //   },
    //   {
    //     handle: "Instagram Profile",
    //     platform: Platform.Instagram,
    //     url: "#",
    //   },
    //   {
    //     handle: "LinkedIn Profile",
    //     platform: Platform.LinkedIn,
    //     url: "#",
    //   },
    //   {
    //     handle: "Twitter Handle",
    //     platform: Platform.X,
    //     url: "#",
    //   },
    // ],
  },
};
