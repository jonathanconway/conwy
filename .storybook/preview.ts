import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

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
      themes: { dark: "dark", light: "light" },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
  ],
};

export default preview;
