import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { tailwindThoughtsIllustration } from "@/content/illustrations/composite/tailwind-thoughts";

import { IllustrationCompositePost3Circle } from "./illustration-composite-post-3-circle";

const meta = {
  title: "Components/Illustration/Composite/Post3Circle",
  component: IllustrationCompositePost3Circle,
} satisfies Meta<typeof IllustrationCompositePost3Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    illustration: tailwindThoughtsIllustration,
  },
  render: IllustrationCompositePost3Circle,
};
