import { MINIMAL_VIEWPORTS } from "storybook/viewport";
import type { Preview } from "@storybook/react-vite";

import "./styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
  },
};

export default preview;
