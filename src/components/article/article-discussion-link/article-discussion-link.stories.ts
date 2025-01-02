import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDiscussionLink } from "./article-discussion-link";
import { createArticleDiscussionLinkPropsMock } from "./article-discussion-link.mocks";

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
