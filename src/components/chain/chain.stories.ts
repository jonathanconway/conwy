import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Chain } from "./chain";
import { createChainPropsMock } from "./chain.mocks";

const meta = {
  title: "Components/Chain",
  component: Chain,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Chain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createChainPropsMock(),
};
