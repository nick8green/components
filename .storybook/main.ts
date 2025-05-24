import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../src/Introduction.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/nextjs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (viteConfig) => {
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias || {}),
      // Alias next/* imports to our mocks
      "next/image": require.resolve(
        "../.storybook/__mocks__/NextImageMock.tsx",
      ),
      "next/dynamic": require.resolve(
        "../.storybook/__mocks__/NextDynamicMock.tsx",
      ),
      "next/link": require.resolve("../.storybook/__mocks__/NextLinkMock.tsx"),
    };
    return mergeConfig(viteConfig, {
      define: {
        "process.env": {},
      },
    });
  },
};

export default config;
