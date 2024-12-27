import { themeBase } from "../theme/theme-base";

export const switchThemeBase = {
  color: "",
  background: {
    color: "",
  },
  checked: {
    color: "",
    background: {
      color: "",
    },
  },
};

export const switchThemeLight = {
  color: themeBase.colors.black_50,
  background: {
    color: themeBase.colors.stone_300,
  },
  checked: {
    color: themeBase.colors.white,
    background: {
      color: themeBase.colors.purple_900,
    },
  },
};

export const switchThemeDark = {
  color: themeBase.colors.black_50,
  background: {
    color: themeBase.colors.stone_800,
  },
  checked: {
    color: themeBase.colors.white,
    background: {
      color: themeBase.colors.purple_600,
    },
  },
};
