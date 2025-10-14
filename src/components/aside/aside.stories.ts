import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Aside } from "./aside";
import { createAsidePropsMock } from "./aside.mocks";

const meta = {
  title: "Components/Aside",
  component: Aside,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createAsidePropsMock(),
};
