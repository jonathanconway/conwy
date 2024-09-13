import type { Meta, StoryObj } from "@storybook/react";

import { TagFilters } from "./tag-filters";
import { createTagFiltersPropsMock } from "./tag-filters.mocks";

const meta = {
  title: "Components/Articles/TagFilters",
  component: TagFilters,
} satisfies Meta<typeof TagFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createTagFiltersPropsMock(),
};
