import type { Meta, StoryObj } from "@storybook/react";

import { MicroListItem } from "./micro-list-item";
import { createMicroListItemPropsMock } from "./micro-list-item.mocks";

const meta = {
  title: "Components/Articles/MicroListItem",
  component: MicroListItem,
  // argTypes: {
  //   title: { control: "text" },
  //   date: { control: "date" },
  //   slug: { control: "text" },
  //   tags: { option= },
  //   socialLinks: { control: "array" },
  // },
} satisfies Meta<typeof MicroListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createMicroListItemPropsMock(),
};
