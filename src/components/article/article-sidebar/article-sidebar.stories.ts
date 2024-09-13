import type { Meta, StoryObj } from "@storybook/react";

import { ArticleSidebar } from "./article-sidebar";
import { createArticleSidebarPropsMock } from "./article-sidebar.mocks";

const meta = {
  title: "Components/Articles/ArticleSidebar",
  component: ArticleSidebar,
  argTypes: {},
} satisfies Meta<typeof ArticleSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createArticleSidebarPropsMock(),
};
