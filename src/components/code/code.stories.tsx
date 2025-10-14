import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Code } from "./code";
import { createCodePropsMock } from "./code.mocks";

const meta = {
  title: "Components/Code",
  component: Code,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createCodePropsMock(),
  render: (props) => (
    <pre className="language-javascript" data-line="3-9, 18-24">
      <Code {...props} />
    </pre>
  ),
};
