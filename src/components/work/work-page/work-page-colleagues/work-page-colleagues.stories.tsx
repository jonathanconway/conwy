import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WorkPageColleagues } from "./work-page-colleagues";
import { createWorkPageColleaguesPropsMock } from "./work-page-colleagues.mocks";

const meta = {
  title: "Components/Work/WorkPage/WorkPageColleagues",
  component: WorkPageColleagues,
  argTypes: {},
} satisfies Meta<typeof WorkPageColleagues>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createWorkPageColleaguesPropsMock(),
};
