import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./article-list-item";
import { createArticleListItemPropsMock } from "./article-list-item.mocks";

const meta = {
  title: "Components/Articles/ArticleListItem",
  component: ArticleListItem,
  argTypes: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createArticleListItemPropsMock(),
};
