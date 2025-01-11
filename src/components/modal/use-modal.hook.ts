"use client";

import { MouseEvent, useCallback, useEffect, useRef } from "react";

import { isBackdrop } from "../backdrop";

import { useModalFocusTrap } from "./modal-focus-trap/use-modal-focus-trap.hook";
import { ModalProps } from "./modal-props";

type UseModalParams = ModalProps;

export function useModal(params: UseModalParams) {
  const { modalRef, handleTrapInputFocus } = useModalFocusTrap();

  const handleWindowKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        params.onClose?.();
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!isBackdrop(target)) {
      return;
    }

    params.onClose?.();
  };

  return {
    modalRef,
    handleTrapInputFocus,

    handleBackdropClick,
  };
}
