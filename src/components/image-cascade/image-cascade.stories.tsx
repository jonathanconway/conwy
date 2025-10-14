import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ImageCascade } from "./image-cascade";
import { IMAGE_CASCADE_PROPS_MOCK } from "./image-cascade.mocks";

const meta = {
  title: "Components/ImageCascade",
  component: ImageCascade,
  argTypes: {},
} satisfies Meta<typeof ImageCascade>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...IMAGE_CASCADE_PROPS_MOCK,
  },
};
