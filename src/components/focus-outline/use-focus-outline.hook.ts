"use client";

import { useEffect } from "react";

import { themeFocusOutlineClass } from "./focus-outline-theme.css";

export function useFocusOutline() {
  const handleWindowMouseDown = () => {
    window.document.body.classList.remove(themeFocusOutlineClass);
  };

  const handleWindowKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Tab":
        if (!window.document.body.classList.contains(themeFocusOutlineClass)) {
          window.document.body.classList.add(themeFocusOutlineClass);
        }
        break;
      case "Escape":
        window.document.body.classList.remove(themeFocusOutlineClass);
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
