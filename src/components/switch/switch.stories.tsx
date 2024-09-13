import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./switch";
import { SWITCH_PROPS_MOCK } from "./switch.mocks";

const meta = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...SWITCH_PROPS_MOCK,
  },
};
