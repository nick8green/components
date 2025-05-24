import type { Meta, StoryObj } from "@storybook/react";
import Footer from "components/Footer";

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
  },
  parameters: {
    layout: "fullscreen",
  },
};
