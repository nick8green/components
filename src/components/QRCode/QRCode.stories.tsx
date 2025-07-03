import { type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import QRCode, { type QRCodeDisplayOptions } from "components/QRCode";

type QRCodeStoryProps = ComponentProps<typeof QRCode> &
  QRCodeDisplayOptions & { imagePath: string };

const meta: Meta<QRCodeStoryProps> = {
  title: "Display/QRCode",
  component: QRCode,
  argTypes: {
    background: {
      control: {
        type: "color",
      },
      description:
        "Part of the display properties. The background color of the QR code.",
    },
    foreground: {
      control: {
        type: "color",
      },
      description:
        "Part of the display properties. The foreground color of the QR code.",
    },
    imagePath: {
      control: {
        type: "text",
      },
      description:
        "Part of the display properties. The path to the image to overlay on the QR code.",
    },
    display: {
      control: false,
    },
    title: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
  },
  render: ({ background, foreground, imagePath, ...props }) => {
    return (
      <QRCode
        {...props}
        display={{ background, foreground, image: imagePath }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {
    title: "Example QR Code",
    value: "https://example.com",
  },
};
