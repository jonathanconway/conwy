import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WorkPageProjects } from "./work-page-projects";
import { createWorkPageProjectsPropsMock } from "./work-page-projects.mocks";

const meta = {
  title: "Components/Work/WorkPage/WorkPageProjects",
  component: WorkPageProjects,
  argTypes: {},
} satisfies Meta<typeof WorkPageProjects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createWorkPageProjectsPropsMock(),
};
