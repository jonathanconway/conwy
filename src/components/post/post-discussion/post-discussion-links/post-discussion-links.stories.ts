import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PostDiscussionLink } from "./post-discussion-links";
import { createPostDiscussionLinkPropsMock } from "./post-discussion-links.mocks";

const meta = {
  title: "Components/Post/PostDiscussionLink",
  component: PostDiscussionLink,
  argTypes: {},
} satisfies Meta<typeof PostDiscussionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createPostDiscussionLinkPropsMock(),
};
