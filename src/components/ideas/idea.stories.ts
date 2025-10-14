import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { createIdeaMock } from "@/framework/client";

import { Idea } from "./idea";

const meta = {
  title: "Components/Idea",
  component: Idea,
} satisfies Meta<typeof Idea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    idea: createIdeaMock(),
  },
};
