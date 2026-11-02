import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EngagementPageColleagues } from "./engagement-page-colleagues";
import { createEngagementPageColleaguesPropsMock } from "./engagement-page-colleagues.mocks";

const meta = {
  title: "Components/Engagement/EngagementPage/EngagementPageColleagues",
  component: EngagementPageColleagues,
  argTypes: {},
} satisfies Meta<typeof EngagementPageColleagues>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createEngagementPageColleaguesPropsMock(),
};
