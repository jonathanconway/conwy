import { createTheme } from "@vanilla-extract/css";

import { switchThemeDark } from "../switch/switch.css-theme";

import { themeBase } from "./theme-base";
import { vars } from "./theme-contract.css";

export const themeDarkClass = createTheme(vars, {
  ...themeBase,

  colors: {
    ...themeBase.colors,

    border_1: themeBase.colors.stone_700,
    border_2: themeBase.colors.stone_700,
    behind_page_background: themeBase.colors.white,
    page_background: themeBase.colors.stone_900,
    text: themeBase.colors.stone_50,
    tooltip_background: themeBase.colors.white,
    tooltip: themeBase.colors.stone_800,
    list_item_hover_background: themeBase.colors.stone_800,
    label: themeBase.colors.stone_300,
    mobile_menu_button: themeBase.colors.stone_50,
    mobile_menu: themeBase.colors.stone_50,
    selection_background: themeBase.colors.stone_700,
  },

  articlesListItem: {
    type: {
      color: themeBase.colors.stone_500,
    },
  },
  articlesTagFilters: {
    tagFilterBox: {
      selected: {
        color: themeBase.colors.violet_300,
      },
    },
  },
  blockQuote: {
    background: {
      color: themeBase.colors.stone_800,
    },
  },
  box: {
    border: {
      color: themeBase.colors.stone_700,
    },
  },
  button: {
    background: {
      gradientFrom: {
        color: themeBase.colors.stone_500,
      },
      gradientTo: {
        color: themeBase.colors.stone_700,
      },
    },
    border: {
      color: themeBase.colors.stone_700,
    },
    color: themeBase.colors.stone_700,
    hover: {
      background: {
        gradientFrom: {
          color: themeBase.colors.stone_400,
        },
        gradientTo: {
          color: themeBase.colors.stone_600,
        },
      },
    },
    selected: {
      border: {
        color: themeBase.colors.stone_300,
      },
      background: {
        gradientFrom: {
          color: themeBase.colors.stone_100,
        },
        gradientTo: {
          color: themeBase.colors.stone_300,
        },
      },
    },
  },
  code: {
    border: {
      color: themeBase.colors.stone_700,
    },
  },
  footer: {
    color: themeBase.colors.stone_200,
    background: {
      color: themeBase.colors.stone_800,
    },
  },
  link: {
    text: {
      color: themeBase.colors.sky_300,
      decoration: {
        color: themeBase.colors.sky_300,
      },
    },
    hover: {
      text: {
        color: themeBase.colors.sky_400,
        decoration: {
          color: themeBase.colors.sky_400,
        },
      },
    },
  },
  tooltip: {
    color: themeBase.colors.stone_800,
    background: {
      color: themeBase.colors.white,
    },
  },
  switch: switchThemeDark,

  filters: {
    ...themeBase.filters,

    logo: themeBase.filters.brightness_125,
  },

  text: {
    lg: {
      fontSize: "",
      lineHeight: "",
    },
  },
});
