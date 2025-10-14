import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";

import { THEME_CLASSES } from "../src/components/theme/theme-classes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { dark: THEME_CLASSES["dark"], light: THEME_CLASSES["light"] },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
  ],
};

export default preview;
