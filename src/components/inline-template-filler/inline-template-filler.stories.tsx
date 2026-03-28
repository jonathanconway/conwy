import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { InlineTemplateFiller } from "./inline-template-filler";
import { createInlineTemplateFillerPropsMock } from "./inline-template-filler.mocks";

const meta = {
  title: "Components/InlineTemplateFiller",
  component: InlineTemplateFiller,
  argTypes: {},
} satisfies Meta<typeof InlineTemplateFiller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: createInlineTemplateFillerPropsMock(),
};
