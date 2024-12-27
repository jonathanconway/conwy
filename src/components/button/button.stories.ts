import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { createButtonPropsMock } from "./button.mocks";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createButtonPropsMock(),
};
