import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProjectsListItem } from "./projects-list-item";
import { createProjectsListItemMock } from "./projects-list-item.mocks";

const meta = {
  title: "components/projects/ProjectsListItem",
  component: ProjectsListItem,
  argTypes: {},
} satisfies Meta<typeof ProjectsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createProjectsListItemMock(),
};
