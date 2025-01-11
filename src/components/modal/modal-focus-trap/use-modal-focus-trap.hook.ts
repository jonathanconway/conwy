import { useRef } from "react";

export function useModalFocusTrap() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleTrapInputFocus = () => {
    modalRef?.current?.focus();
  };

  return {
    modalRef,
    handleTrapInputFocus,
  };
}
