import type { Meta, StoryObj } from "@storybook/react";

import { SocialLinksIcons } from "./social-links-icons";
import { createSocialLinksPropsMock } from "./social-links-icons.mocks";

const meta = {
  title: "Components/Articles/ArticleListItem/SocialLinks",
  component: SocialLinksIcons,
  argTypes: {},
} satisfies Meta<typeof SocialLinksIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createSocialLinksPropsMock(),
};
