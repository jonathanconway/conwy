"use client";

import { useEffect, useState } from "react";

import { setSelectedThemeClass } from "./selected-theme-class-setter";
import {
  getSelectedThemeFromLocalStorageOrDefault,
  setSelectedThemeToLocalStorage,
} from "./selected-theme-storage";
import {
  addSelectedThemeStorageListener,
  removeSelectedThemeStorageListener,
} from "./selected-theme-storage-watcher";
import { Theme, Themes } from "./themes";

const DEFAULT_THEME = Themes.Light;

export function useSelectedTheme() {
  const [selectedThemeState, setSelectedThemeState] =
    useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setSelectedThemeState(getSelectedThemeFromLocalStorageOrDefault());
  }, []);

  useEffect(() => {
    setSelectedThemeClass(selectedThemeState);
  }, [selectedThemeState]);

  useEffect(() => {
    addSelectedThemeStorageListener(setSelectedThemeState);

    return () => {
      removeSelectedThemeStorageListener(setSelectedThemeState);
    };
  }, []);

  const selectedTheme = selectedThemeState;

  const setSelectedTheme = (theme: Theme) => {
    // if (!isClient) {
    //   return;
    // }

    setSelectedThemeState(theme);
    setSelectedThemeToLocalStorage(theme);
  };

  return {
    selectedTheme,
    setSelectedTheme,
  };
}
