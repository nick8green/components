import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "components/Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Display/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "7.5em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Home",
        url: "#",
        isActive: true,
      },
      {
        label: "About",
        url: "#",
      },
      {
        label: "Services",
        url: "#",
        children: [
          {
            label: "Web Development",
            url: "#",
            children: [
              {
                label: "Web Development",
                url: "#",
              },
              {
                label: "SEO Services",
                url: "#",
                children: [
                  {
                    label: "Web Development",
                    url: "#",
                  },
                  {
                    label: "SEO Services",
                    url: "#",
                  },
                ],
              },
            ],
          },
          {
            label: "SEO Services",
            url: "#",
          },
        ],
      },
      {
        label: "Contact",
        url: "#",
      },
    ],
  },
};
