import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArticlesTagFilters } from "./articles-tag-filters";

const meta = {
  title: "Components/Articles/ArticlesTagFilters",
  component: ArticlesTagFilters,
} satisfies Meta<typeof ArticlesTagFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
