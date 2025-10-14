import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArticleSidebar } from "./article-sidebar";
import { createArticleSidebarPropsMock } from "./article-sidebar.mocks";

const meta = {
  title: "Components/Article/ArticleSidebar",
  component: ArticleSidebar,
  argTypes: {},
} satisfies Meta<typeof ArticleSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createArticleSidebarPropsMock(),
};
