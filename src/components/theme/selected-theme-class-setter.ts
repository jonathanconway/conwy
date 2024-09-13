import { Theme, Themes } from "./themes";

export function setSelectedThemeClass(theme: Theme) {
  const containerElement = document.body.parentElement!;

  containerElement.classList.remove(...Object.values(Themes));
  containerElement.classList.add(theme);
}
