import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MicroPageSidebar } from "./micro-page-sidebar";
import { createMicroPageSidebarPropsMock } from "./micro-page-sidebar.mocks";

const meta = {
  title: "Components/Micro/MicroPageSidebar",
  component: MicroPageSidebar,
  argTypes: {},
} satisfies Meta<typeof MicroPageSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createMicroPageSidebarPropsMock(),
};
