import type { Meta, StoryObj } from "@storybook/react";

import { WorkColleagues } from "./work-colleagues";
import { WORK_COLLEAGUE_RELATIONSHIPS_PROPS_MOCK } from "./work-colleagues.mocks";

const meta = {
  title: "Components/WorkColleagues",
  component: WorkColleagues,
  argTypes: {},
} satisfies Meta<typeof WorkColleagues>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...WORK_COLLEAGUE_RELATIONSHIPS_PROPS_MOCK,
  },
};
