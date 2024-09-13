import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./link";
import { createLinkPropsMock } from "./link.mocks";

const meta = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createLinkPropsMock(),
};
