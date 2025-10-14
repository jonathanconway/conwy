import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LinkBox } from "./link-box";
import { LINK_BOX_PROPS_MOCK } from "./link-box.mocks";

const meta = {
  title: "Components/LinkBox",
  component: LinkBox,
  argTypes: {
    href: { control: "text" },
  },
} satisfies Meta<typeof LinkBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: LINK_BOX_PROPS_MOCK,
};
