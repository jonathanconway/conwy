import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MicrosListItem } from "./micros-list-item";
import { createMicroListItemPropsMock } from "./micros-list-item.mocks";

const meta = {
  title: "Components/Articles/MicrosListItem",
  component: MicrosListItem,
} satisfies Meta<typeof MicrosListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createMicroListItemPropsMock(),
};
