/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import { name, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name, // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts(), tsconfigPaths()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).

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
