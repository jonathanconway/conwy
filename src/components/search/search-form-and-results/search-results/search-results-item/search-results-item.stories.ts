import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchResultsItem } from "./search-results-item";
import { createSearchResultsItemPropsMock } from "./search-results-item.mocks";

const meta = {
  title: "Components/Search/SearchResults/SearchResultsItem",
  component: SearchResultsItem,
  argTypes: {},
} satisfies Meta<typeof SearchResultsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createSearchResultsItemPropsMock(),
};
