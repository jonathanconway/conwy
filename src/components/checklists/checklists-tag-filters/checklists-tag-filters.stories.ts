import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ChecklistsTagFilters } from "./checklists-tag-filters";
import { createChecklistsTagFiltersPropsMock } from "./checklists-tag-filters.mocks";

const meta = {
  title: "Components/Articles/ChecklistsTagFilters",
  component: ChecklistsTagFilters,
} satisfies Meta<typeof ChecklistsTagFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createChecklistsTagFiltersPropsMock(),
};
