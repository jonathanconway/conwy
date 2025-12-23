import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WorkProjects } from "./work-projects";
import { createWorkProjectsPropsMock } from "./work-projects.mocks";

const meta = {
  title: "Components/WorkProjects",
  component: WorkProjects,
  argTypes: {},
} satisfies Meta<typeof WorkProjects>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createWorkProjectsPropsMock(),
};
