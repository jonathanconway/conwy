import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./box";
import { createBoxPropsMock } from "./box.mocks";

const meta = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createBoxPropsMock(),
};
