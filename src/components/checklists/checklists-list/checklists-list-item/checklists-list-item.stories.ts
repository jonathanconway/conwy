import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ChecklistsListItem } from "./checklists-list-item";
import { createChecklistsListItemPropsMock } from "./checklists-list-item.mocks";

const meta = {
  title: "Components/Articles/ChecklistsListItem",
  component: ChecklistsListItem,
  argTypes: {},
} satisfies Meta<typeof ChecklistsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createChecklistsListItemPropsMock(),
};
