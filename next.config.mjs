import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import {
  createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin';

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm]
  }
})

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // Optionally, add any other Next.js config below
  images: { unoptimized: true },

  // Override the default webpack configuration
  webpack: (config) => {
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
        ...config.resolve.alias,
        "sharp$": false,
        "onnxruntime-node$": false,
    }
    return config;
  },
  
  staticPageGenerationTimeout: 5000
}

export default withVanillaExtract(withMDX(nextConfig));