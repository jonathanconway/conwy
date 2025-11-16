import { ComponentGenTemplateParams } from "./component.params";

export default ({
  name,
  nameComponent,
  nameComponentProps,
  nameComponentPropsMock,
}: ComponentGenTemplateParams) =>
  `

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ${nameComponent} } from "./${name}";
import { ${nameComponentPropsMock} } from "./${name}.mocks";

const meta = {
  title: "Components/${nameComponent}",
  component: ${nameComponent},
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof ${nameComponent}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ${nameComponentPropsMock}(),
};

`.trim();
