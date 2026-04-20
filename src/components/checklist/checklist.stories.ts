import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checklist } from "./checklist";
import { createChecklistPropsMock } from "./checklist.mocks";

const meta = {
  title: "Components/Checklist",
  component: Checklist,
  argTypes: {},
} satisfies Meta<typeof Checklist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createChecklistPropsMock(),
};
