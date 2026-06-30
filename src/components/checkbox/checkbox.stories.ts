import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Checkbox } from "./checkbox";
import { CheckboxBaseColors } from "./checkbox-base-colors";
import { createCheckboxPropsMock } from "./checkbox.mocks";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    children: { control: "text" },
    baseColor: {
      control: "select",
      options: Object.values(CheckboxBaseColors),
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createCheckboxPropsMock(),
};
