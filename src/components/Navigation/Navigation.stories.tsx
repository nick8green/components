import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faBellConcierge,
  faEarthEurope,
  faEnvelope,
  faHouseChimney,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";
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
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Home",
        url: "#",
        icon: faHouseChimney,
        isActive: true,
      },
      {
        icon: faInfoCircle,
        label: "About",
        url: "#",
      },
      {
        icon: faBellConcierge,
        label: "Services",
        url: "#",
        children: [
          {
            icon: faEarthEurope,
            label: "Web Development",
            url: "#",
            children: [
              {
                icon: faEarthEurope,
                label: "Web Development",
                url: "#",
              },
              {
                icon: faSearchengin,
                label: "SEO Services",
                url: "#",
                children: [
                  {
                    icon: faEarthEurope,
                    label: "Web Development",
                    url: "#",
                  },
                  {
                    icon: faSearchengin,
                    label: "SEO Services",
                    url: "#",
                  },
                ],
              },
            ],
          },
          {
            icon: faSearchengin,
            label: "SEO Services",
            url: "#",
          },
        ],
      },
      {
        icon: faEnvelope,
        label: "Contact",
        url: "#",
      },
    ],
  },
};
