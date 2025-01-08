"use client";

import { useEffect } from "react";

import {
  themeFocusOutlineDisabledClass,
  themeFocusOutlineEnabledClass,
} from "./focus-outline-theme.css";

function setFocusOutline(isEnabled: boolean) {
  if (isEnabled) {
    window.document.body.classList.remove(themeFocusOutlineDisabledClass);
    if (
      !window.document.body.classList.contains(themeFocusOutlineEnabledClass)
    ) {
      window.document.body.classList.add(themeFocusOutlineEnabledClass);
    }
  } else {
    window.document.body.classList.remove(themeFocusOutlineEnabledClass);
    if (
      !window.document.body.classList.contains(themeFocusOutlineDisabledClass)
    ) {
      window.document.body.classList.add(themeFocusOutlineDisabledClass);
    }
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
