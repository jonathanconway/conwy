"use client";

import { useEffect } from "react";

import * as styles from "./focus-outline-theme.css";

function setFocusOutline(isEnabled: boolean) {
  if (isEnabled) {
    if (
      !window.document.body.classList.contains(
        styles.themeFocusOutlineEnabledClass,
      )
    ) {
      window.document.body.classList.add(styles.themeFocusOutlineEnabledClass);
    }
  } else {
    window.document.body.classList.remove(styles.themeFocusOutlineEnabledClass);
  }
}

export function useFocusOutline() {
  const handleWindowMouseDown = () => {
    setFocusOutline(false);
  };

  const handleWindowKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Tab":
        setFocusOutline(true);
        break;
      case "Escape":
        setFocusOutline(false);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    window.addEventListener("mousedown", handleWindowMouseDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
      window.removeEventListener("mousedown", handleWindowMouseDown);
    };
  }, []);
}
