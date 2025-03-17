import type { Meta, StoryObj } from "@storybook/react";
import Footer from "components/Footer";
import { Platform } from "components/SocialMediaLink";

const meta: Meta<typeof Footer> = {
  title: "Display/Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    contactInfo: {
      address: "1234 Main St, Springfield, IL 62701",
      phone: "217-555-1234",
      fax: "217-555-5678",
    },
    copyright: {
      owner: "My Business",
      year: 2025,
    },
    links: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ],
    socials: [
      {
        handle: "Facebook Profile",
        platform: Platform.Facebook,
        url: "#",
      },
      {
        handle: "Instagram Profile",
        platform: Platform.Instagram,
        url: "#",
      },
      {
        handle: "LinkedIn Profile",
        platform: Platform.LinkedIn,
        url: "#",
      },
      {
        handle: "Twitter Handle",
        platform: Platform.X,
        url: "#",
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
  },
};
