import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import { THEME_CLASSES } from "../src/components/theme/theme-classes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
