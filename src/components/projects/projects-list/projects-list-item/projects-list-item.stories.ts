import type { Meta, StoryObj } from "@storybook/react";

import { ProjectsListItem } from "./projects-list-item";
import { PROJECTS_LIST_ITEM_MOCK } from "./projects-list-item.mocks";

const meta = {
  title: "components/projects/ProjectsListItem",
  component: ProjectsListItem,
  argTypes: {},
} satisfies Meta<typeof ProjectsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: PROJECTS_LIST_ITEM_MOCK,
};
