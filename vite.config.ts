/// <reference types="vitest" />

import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

import { name, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      // entry: "./src/index.ts", // Specifies the entry point for building the library.
      name, // Sets the name of the generated library.
      // fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
      entry: {
        index: "src/index.ts", // server-safe entry
        client: "src/client.ts", // client-only entry
      },
      // formats: ["es"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        "react/jsx-runtime",
        "react-dom",
        "react-dom/client",
      ], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [
    dts({
      entryRoot: "src", // Specifies the root directory for entry points.
      outDir: "dist", // Specifies the output directory for generated types.
    }),
    tsconfigPaths(),
    cssInjectedByJsPlugin(),
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
