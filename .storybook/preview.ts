import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import type { Preview } from "@storybook/react-vite";

import "./styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    initialGlobals: {
      backgrounds: { value: "light" },
    },
    layout: "centered",
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
  },

  initialGlobals: {
    viewport: {
      value: "responsive",
      isRotated: false,
    },
  },
};

export default preview;
