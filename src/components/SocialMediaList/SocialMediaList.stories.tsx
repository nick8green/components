import type { Meta, StoryObj } from "@storybook/react";
import { Platform } from "components/SocialMediaLink";
import SocialMediaList, {
  type SocialMediaListDisplayProps,
} from "components/SocialMediaList";
import type { ComponentProps } from "react";

type SocialMediaListStoryProps = ComponentProps<typeof SocialMediaList> &
  SocialMediaListDisplayProps;

const meta: Meta<SocialMediaListStoryProps> = {
  title: "Display/SocialMediaList",
  component: SocialMediaList,
  argTypes: {
    direction: {
      options: ["column", "row"],
      control: { type: "radio" },
      description:
        "Part of the display properties. Determines the direction of the list.",
    },
    display: {
      control: false,
      description:
        "Turned off in storybook in favor of the direction and showHandles props.",
    },
    showHandles: {
      control: "boolean",
      description:
        "Part of the display properties. Determines whether to show the user's handle with the media icon.",
    },
    socials: {
      control: "object",
    },
  },
  render: ({ direction, showHandles, ...props }) => {
    return <SocialMediaList {...props} display={{ direction, showHandles }} />;
  },
};

export default meta;
type Story = StoryObj<SocialMediaListStoryProps>;

export const Default: Story = {
  args: {
    direction: "row",
    showHandles: false,
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
};
