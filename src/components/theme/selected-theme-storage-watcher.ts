import { LocalStorageKeys } from "../../app/local-storage-keys";

import {
  SelectedThemeChangedEvent,
  getSelectedThemeFromLocalStorageOrDefault,
} from "./selected-theme-storage";
import { Theme } from "./themes";

type StorageListener = (newTheme: Theme) => void;

const createStorageListener =
  (onChange: StorageListener) => (event: StorageEvent) => {
    if (event.key !== LocalStorageKeys.Theme) {
      return;
    }
    onChange(event.newValue as Theme);
  };

const createSelectedThemeChangedListener =
  (onChange: StorageListener) => (event: Event) => {
    if (event.type === SelectedThemeChangedEvent.type) {
      onChange((event as SelectedThemeChangedEvent).theme);
    }
  };

export function removeSelectedThemeStorageListener(onChange: StorageListener) {
  window.removeEventListener(
    "storage",
    onChange as unknown as EventListenerOrEventListenerObject,
  );
}

export function addSelectedThemeStorageListener(onChange: StorageListener) {
  window.addEventListener("storage", createStorageListener(onChange));
  window.addEventListener(
    SelectedThemeChangedEvent.type,
    createSelectedThemeChangedListener(onChange),
  );
  onChange(getSelectedThemeFromLocalStorageOrDefault());
}
