import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Filters } from "./filters";
import { createFiltersPropsMock } from "./filters.mocks";

const meta = {
  title: "Components/Filters",
  component: Filters,
  argTypes: {},
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createFiltersPropsMock(),
};
