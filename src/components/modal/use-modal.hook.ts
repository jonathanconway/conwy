"use client";

import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useCallback,
  useEffect,
} from "react";

import { KeyboardKeys } from "@/framework";

import { isBackdrop } from "../backdrop";

import { useModalFocusTrap } from "./modal-focus-trap/use-modal-focus-trap.hook";
import { ModalProps } from "./modal-props";

type UseModalParams = ModalProps;

interface UseModalResult {
  readonly modalRef: RefObject<HTMLDialogElement | null>;

  readonly handleTrapInputFocus: VoidFunction;
  readonly handleBackdropClick: MouseEventHandler;

  readonly closeModal: VoidFunction;
}

export function useModal(params: UseModalParams): UseModalResult {
  const { modalRef, handleTrapInputFocus } = useModalFocusTrap();

  const handleWindowKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case KeyboardKeys.Escape:
        event.preventDefault();
        closeModal();
        break;
    }
  }, []);

  useEffect(() => {
    modalRef.current?.focus();

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModal() {
    params.onClose?.();

    params.triggerRef?.current?.focus();
  }

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!isBackdrop(target)) {
      return;
    }

    closeModal();
  };

  return {
    modalRef,

    handleTrapInputFocus,
    handleBackdropClick,

    closeModal,
  };
}
