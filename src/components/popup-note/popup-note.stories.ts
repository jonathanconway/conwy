import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PopupNote } from "./popup-note";
import { createPopupNotePropsMock } from "./popup-note.mocks";

const meta = {
  title: "Components/PopupNote",
  component: PopupNote,
  argTypes: {},
} satisfies Meta<typeof PopupNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createPopupNotePropsMock(),
};
