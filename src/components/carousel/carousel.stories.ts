import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./carousel";
import { createCarouselPropsMock } from "./carousel.mocks";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createCarouselPropsMock(),
};
