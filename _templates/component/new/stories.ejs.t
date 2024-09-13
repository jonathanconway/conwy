---
to: src/components/<%= h.namePartBranches() %>/<%= h.namePartLeaf() %>.stories.tsx
---

import type { Meta, StoryObj } from "@storybook/react";

import { <%= h.nameUpper() %>_PROPS_MOCK } from './<%= h.namePartLeaf() %>.mocks';
import { <%= h.namePascal() %> } from "./<%= h.namePartLeaf() %>";

const meta = {
  title: "Components/<%= h.namePascal() %>",
  component: <%= h.namePascal() %>,
  argTypes: {},
} satisfies Meta<typeof <%= h.namePascal() %>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...<%= h.nameUpper() %>_PROPS_MOCK,
  },
};

