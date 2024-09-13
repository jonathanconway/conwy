import type { Meta, StoryObj } from "@storybook/react";

import { WorkProjects } from "./work-projects";
import { WORK_PROJECTS_PROPS_MOCK } from "./work-projects.mocks";

const meta = {
  title: "Components/WorkProjects",
  component: WorkProjects,
  argTypes: {},
} satisfies Meta<typeof WorkProjects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...WORK_PROJECTS_PROPS_MOCK,
  },
};
