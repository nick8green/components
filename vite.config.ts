/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "./src/index.ts", // Server-side entry point
        client: "./src/client.ts", // Client-side entry point for Next.js
      },
      name, // Sets the name of the generated library.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [
        "@fortawesome/fontawesome-common-types",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "moment",
        "next",
        "next/link",
        "next/router",
        "next/dynamic",
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-markdown",
        "remark-gfm",
        "rehype-react",
        "qrcode.react",
      ], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {},
        assetFileNames: "index.[ext]", // Control CSS output name
      },
      onwarn(warning, warn) {
        if (warning.code === "EVAL") return;
        warn(warning);
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
    cssCodeSplit: false, // Disable CSS code splitting for predictable output.
  },
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      entryRoot: "src",
      include: ["src"],
    }),
  ], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).

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
        "./src/index.ts",
        "setupTests.ts",
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
