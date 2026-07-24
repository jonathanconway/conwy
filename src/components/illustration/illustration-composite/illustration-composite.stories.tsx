import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import * as composites from "@/content/illustrations/composite";
import * as layouts from "@/content/illustrations/layout";

import { IllustrationComposite } from "./illustration-composite";

const meta = {
  title: "Components/Illustration/IllustrationComposite",
  component: IllustrationComposite,
  argTypes: {
    illustration: {
      control: "select",
      options: Object.keys(composites),
      mapping: composites,
    },
    illustrationLayout: {
      control: "select",
      options: Object.keys(layouts),
      mapping: layouts,
    },
  },
} satisfies Meta<typeof IllustrationComposite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    illustration: composites.tailwindThoughtsIllustration,
    illustrationLayout: layouts.conwyPostIllustrationLayout,
  },
  render: IllustrationComposite,
};
