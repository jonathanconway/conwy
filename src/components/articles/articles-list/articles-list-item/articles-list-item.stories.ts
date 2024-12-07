import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesListItem } from "./articles-list-item";
import { createArticlesListItemPropsMock } from "./articles-list-item.mocks";

const meta = {
  title: "Components/Articles/ArticlesListItem",
  component: ArticlesListItem,
  argTypes: {},
} satisfies Meta<typeof ArticlesListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createArticlesListItemPropsMock(),
};
