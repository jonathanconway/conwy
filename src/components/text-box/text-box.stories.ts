import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TextBox } from "./text-box";
import { createTextBoxPropsMock } from "./text-box.mocks";

const meta = {
  title: "Components/TextBox",
  component: TextBox,
  argTypes: {
    value: { control: "text" },
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createTextBoxPropsMock(),
};
