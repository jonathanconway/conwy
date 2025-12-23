import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ArticleDiscussionLink } from "./article-discussion-links";
import { createArticleDiscussionLinkPropsMock } from "./article-discussion-links.mocks";

const meta = {
  title: "Components/Article/ArticleDiscussionLink",
  component: ArticleDiscussionLink,
  argTypes: {},
} satisfies Meta<typeof ArticleDiscussionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createArticleDiscussionLinkPropsMock(),
};
