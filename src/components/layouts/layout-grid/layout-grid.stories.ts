import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LayoutGrid } from "./layout-grid";
import { createLayoutGridPropsMock } from "./layout-grid.mocks";

const meta = {
  title: "Components/",
  component: LayoutGrid,
  argTypes: {},
} satisfies Meta<typeof LayoutGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createLayoutGridPropsMock(),
};
