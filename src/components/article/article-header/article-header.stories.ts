import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArticleHeader } from "./article-header";
import { createArticleHeaderPropsMock } from "./article-header.mocks";

const meta = {
  title: "Components/Article/ArticleHeader",
  component: ArticleHeader,
  argTypes: {},
} satisfies Meta<typeof ArticleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createArticleHeaderPropsMock(),
};
