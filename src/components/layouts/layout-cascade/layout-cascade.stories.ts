import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LayoutCascade } from "./layout-cascade";
import { createLayoutCascadePropsMock } from "./layout-cascade.mocks";

const meta = {
  title: "Components/Layouts/LayoutCascade",
  component: LayoutCascade,
  argTypes: {},
} satisfies Meta<typeof LayoutCascade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createLayoutCascadePropsMock(),
};
