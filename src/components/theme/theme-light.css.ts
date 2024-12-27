import { createTheme } from "@vanilla-extract/css";

import { switchThemeLight } from "../switch/switch.css-theme";

import { themeBase } from "./theme-base";
import { vars } from "./theme-contract.css";

export const themeLightClass = createTheme(vars, {
  ...themeBase,

  colors: {
    ...themeBase.colors,

    border_1: themeBase.colors.stone_300,
    border_2: themeBase.colors.stone_900,
    behind_page_background: themeBase.colors.stone_900,
    page_background: themeBase.colors.stone_100,
    text: themeBase.colors.stone_950,
    tooltip_background: themeBase.colors.stone_800,
    tooltip: themeBase.colors.stone_200,
    list_item_hover_background: themeBase.colors.stone_200,
    label: themeBase.colors.stone_500,
    mobile_menu_button: themeBase.colors.stone_900,
    mobile_menu: themeBase.colors.stone_950,
    selection_background: themeBase.colors.blue_100,
  },

  articlesListItem: {
    type: {
      color: themeBase.colors.stone_400,
    },
  },
  articlesTagFilters: {
    tagFilterBox: {
      selected: {
        color: themeBase.colors.violet_500,
      },
    },
  },
  blockQuote: {
    background: {
      color: themeBase.colors.stone_200,
    },
  },
  box: {
    border: {
      color: themeBase.colors.stone_300,
    },
  },
  button: {
    background: {
      gradientFrom: {
        color: themeBase.colors.stone_100,
      },
      gradientTo: {
        color: themeBase.colors.stone_300,
      },
    },
    border: {
      color: themeBase.colors.stone_300,
    },
    color: themeBase.colors.stone_700,
    hover: {
      background: {
        gradientFrom: {
          color: themeBase.colors.stone_200,
        },
        gradientTo: {
          color: themeBase.colors.stone_400,
        },
      },
    },
    selected: {
      border: {
        color: themeBase.colors.stone_700,
      },
      background: {
        gradientFrom: {
          color: themeBase.colors.stone_500,
        },
        gradientTo: {
          color: themeBase.colors.stone_700,
        },
      },
    },
  },
  code: {
    border: {
      color: themeBase.colors.stone_400,
    },
  },
  footer: {
    color: "",
    background: {
      color: themeBase.colors.stone_200,
    },
  },
  link: {
    text: {
      color: themeBase.colors.sky_600,
      decoration: {
        color: themeBase.colors.sky_600,
      },
    },
    hover: {
      text: {
        color: themeBase.colors.sky_500,
        decoration: {
          color: themeBase.colors.sky_500,
        },
      },
    },
  },
  switch: switchThemeLight,
  tooltip: {
    color: themeBase.colors.stone_200,
    background: {
      color: themeBase.colors.stone_800,
    },
  },

  filters: {
    ...themeBase.filters,

    logo: "",
  },
});
