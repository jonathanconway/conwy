import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArticleSubHeader } from "./article-subheader";
import { createArticleSubHeaderPropsMock } from "./article-subheader.mocks";

const meta = {
  title: "Components/Article/ArticleSubHeader",
  component: ArticleSubHeader,
  argTypes: {},
} satisfies Meta<typeof ArticleSubHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createArticleSubHeaderPropsMock(),
};
