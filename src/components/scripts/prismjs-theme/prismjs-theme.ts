import { isClient } from "@/framework/client";

import { Theme, addSelectedThemeStorageListener } from "../../theme";

import { PRISM_JS_THEME_CSS_FILENAME_BY_THEME } from "./prismjs-theme-filenames";

function handleSelectedThemeStorage(theme: Theme) {
  setTimeout(() => {
    const prismThemeLinkElements = Array.from(
      document.querySelectorAll('link[href*="themes/prism"]'),
    );
    for (const prismThemeLinkElement of prismThemeLinkElements) {
      prismThemeLinkElement.remove();
    }

    const newLink = document.createElement("LINK");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute(
      "href",
      `/css/prismjs/themes/${PRISM_JS_THEME_CSS_FILENAME_BY_THEME[theme]}`,
    );
    newLink.setAttribute("data-noprefix", "true");

    document.head.appendChild(newLink);
  }, 500);
}

export function loadPrismJSTheme() {
  if (!isClient) {
    return;
  }

  addSelectedThemeStorageListener(handleSelectedThemeStorage);
}
