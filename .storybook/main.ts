import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {},
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });

    if (config?.resolve?.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname, "..", "src");
    }

    return config;
  },
};
export default config;
