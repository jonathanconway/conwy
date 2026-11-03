import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ImageSet } from "./image-set";
import { createImageSetPropsMock } from "./image-set.mocks";

const meta = {
  title: "Components/ImageSet",
  component: ImageSet,
  argTypes: {},
} satisfies Meta<typeof ImageSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createImageSetPropsMock(),
};
