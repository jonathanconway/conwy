import type { Meta, StoryObj } from "@storybook/react";

import { IconTypes } from "../icon/icon-types";

import { IconButton } from "./icon-button";
import { createIconButtonPropsMock } from "./icon-button.mocks";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      options: Object.values(IconTypes),
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createIconButtonPropsMock(),
};
