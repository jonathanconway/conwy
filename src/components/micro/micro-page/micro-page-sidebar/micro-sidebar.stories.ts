import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MicroSidebar } from "./micro-sidebar";
import { createMicroSidebarPropsMock } from "./micro-sidebar.mocks";

const meta = {
  title: "Components/Micro/MicroSidebar",
  component: MicroSidebar,
  argTypes: {},
} satisfies Meta<typeof MicroSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createMicroSidebarPropsMock(),
};
