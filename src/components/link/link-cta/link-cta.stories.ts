import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { LinkCta } from "./link-cta";
import { createLinkCtaMocks } from "./link-cta.mocks";

const meta = {
  title: "Components/LinkCta",
  component: LinkCta,
} satisfies Meta<typeof LinkCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createLinkCtaMocks(),
};
