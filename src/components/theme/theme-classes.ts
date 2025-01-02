import { themeDarkClass } from "./theme-dark.css";
import { themeLightClass } from "./theme-light.css";
import { Themes } from "./themes";

export const THEME_CLASSES = {
  [Themes.Dark]: themeDarkClass,
  [Themes.Light]: themeLightClass,
};
