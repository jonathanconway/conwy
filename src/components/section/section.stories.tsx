import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./section";
import { SECTION_PROPS_MOCK } from "./section.mocks";

const meta = {
  title: "Components/Section",
  component: Section,
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...SECTION_PROPS_MOCK,
  },
};
