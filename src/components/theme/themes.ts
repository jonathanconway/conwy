import { TypeOfConst } from "@/framework/client";

import { themeDarkClass } from "./theme-dark.css";
import { themeLightClass } from "./theme-light.css";

export const Themes = {
  Dark: "dark",
  Light: "light",
} as const;

export type Theme = TypeOfConst<typeof Themes>;

export const THEME_LABELS = {
  [Themes.Dark]: "Dark",
  [Themes.Light]: "Light",
};

export const THEME_CLASSES = {
  [Themes.Dark]: themeDarkClass,
  [Themes.Light]: themeLightClass,
};
