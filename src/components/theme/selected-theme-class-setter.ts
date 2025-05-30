import { THEME_CLASSES } from "./theme-classes";
import { Theme } from "./themes";

export function setSelectedThemeClass(theme: Theme) {
  const containerElement = document.body.parentElement!;

  containerElement.classList.remove(...Object.values(THEME_CLASSES));
  containerElement.classList.add(THEME_CLASSES[theme]);
}
