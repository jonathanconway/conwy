import type { Meta, StoryObj } from "@storybook/react";

import { ArticleSummary } from "./article-summary";
import { createArticleSummaryPropsMock } from "./article-summary.mocks";

const meta = {
  title: "Components/Article/ArticleSummary",
  component: ArticleSummary,
  argTypes: {},
} satisfies Meta<typeof ArticleSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createArticleSummaryPropsMock(),
};
