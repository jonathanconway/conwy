import createMDX from "@next/mdx";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";

import { remarkMdxJsxComponents } from "./next-config-mdx-components-remark-jsx";

const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMdxJsxComponents],
  },
});

const nextConfig: NextConfig = {
  output: "export",

  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Optionally, add any other Next.js config below
  images: { unoptimized: true },

  // Override the default webpack configuration
  webpack: (config) => {
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },

  staticPageGenerationTimeout: 5000,
};

export default withVanillaExtract(withMDX(nextConfig));
