import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import * as compositesMap from "@/content/illustrations/composite";
import * as layoutsMap from "@/content/illustrations/layout";

import { IllustrationComposite } from "./illustration-composite";

const meta = {
  title: "Components/Illustration/IllustrationComposite",
  component: IllustrationComposite,
  argTypes: {
    illustration: {
      control: "select",
      options: Object.keys(compositesMap),
      mapping: compositesMap,
    },
    illustrationLayout: {
      control: "select",
      options: Object.keys(layoutsMap),
      mapping: layoutsMap,
    },
  },
} satisfies Meta<typeof IllustrationComposite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    illustration: compositesMap.tailwindThoughtsIllustration,
    illustrationLayout: layoutsMap.conwyPostIllustrationLayout,
  },
  render: IllustrationComposite,
};
