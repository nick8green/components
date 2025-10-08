import type { Meta, StoryObj } from "@storybook/react-vite";
import Navigation from "components/Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Display/Navigation",
  component: Navigation,
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "10em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["main", "list"],
    },
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
        icon: "home",
        isActive: true,
      },
      {
        icon: "info",
        label: "About",
        url: "#",
      },
      {
        icon: "bell",
        label: "Services",
        url: "#",
        children: [
          {
            icon: "earth",
            label: "Web Development",
            url: "#",
            children: [
              {
                icon: "earth",
                label: "Web Development",
                url: "#",
              },
              {
                icon: "search",
                label: "SEO Services",
                url: "#",
                children: [
                  {
                    icon: "earth",
                    label: "Web Development",
                    url: "#",
                  },
                  {
                    icon: "search",
                    label: "SEO Services",
                    url: "#",
                  },
                ],
              },
            ],
          },
          {
            icon: "search",
            label: "SEO Services",
            url: "#",
          },
        ],
      },
      {
        icon: "envelope",
        label: "Contact",
        url: "#",
      },
    ],
  },
};
