/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { name, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        // Specifies the entry point for building the library.
        index: "./src/index.ts",
        client: "./src/client.ts",

        // button: "./src/components/Button/index.tsx",
        // footer: "./src/components/Footer/index.tsx",
        // header: "./src/components/Header/index.tsx",
        // input: "./src/components/Input/index.tsx",
        // modal: "./src/components/Modal/index.tsx",
        // multiStepForm: "./src/components/MultiStepForm/index.tsx",
        // navigation: "./src/components/Navigation/index.tsx",
        // qrCode: "./src/components/QrCode/index.tsx",
        // socialMediaLink: "./src/components/SocialMediaLink/index.tsx",
        // socialMediaList: "./src/components/SocialMediaList/index.tsx",
        // switch: "./src/components/Switch/index.tsx",
      },
      name, // Sets the name of the generated library.
      // fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts({ outDir: "dist" }), tsconfigPaths()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).

  test: {
    coverage: {
      clean: true,
      exclude: [
        ...configDefaults.exclude,
        "**/*.mdx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
      include: ["src/**"],
      reporter: ["text", "json", "html"],
      provider: "v8",
      thresholds: {
        functions: 80,
        lines: 80,
        statements: 80,
        branches: 80,
      },
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
