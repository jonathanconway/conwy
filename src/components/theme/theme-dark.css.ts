import { createTheme } from "@vanilla-extract/css";

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
