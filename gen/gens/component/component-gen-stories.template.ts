import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenStoriesTemplate = ({
  componentName,
  componentNameKebab,
  componentPropsMockName,
  componentStoryPath,
}: ComponentGenTemplateParams) =>
  `

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ${componentName} } from "./${componentNameKebab}";
import { ${componentPropsMockName} } from "./${componentNameKebab}.mocks";

const meta = {
  title: "Components/${componentStoryPath}",
  component: ${componentName},
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ${componentPropsMockName}(),
};

`.trim();
