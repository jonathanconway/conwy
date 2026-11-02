import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MicrosPageListItem } from "./micros-page-list-item";
import { createMicroListItemPropsMock } from "./micros-page-list-item.mocks";

const meta = {
  title: "Components/Articles/MicrosPageListItem",
  component: MicrosPageListItem,
} satisfies Meta<typeof MicrosPageListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createMicroListItemPropsMock(),
};
