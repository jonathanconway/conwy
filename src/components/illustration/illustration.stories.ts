import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Illustration } from "./illustration";
import { IllustrationTypes } from "./illustration-types";
import { createIllustrationPropsMock } from "./illustration.mocks";

const meta = {
  title: "Components/Illustration",
  component: Illustration,
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    illustration: {
      control: "select",
      options: Object.values(IllustrationTypes),
    },
  },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createIllustrationPropsMock(),
};
