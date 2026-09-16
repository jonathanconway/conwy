"use client";

import { useState } from "react";

import { ActionAndModalProps } from "./action-and-modal-props";

export function ActionAndModal(props: ActionAndModalProps) {
  const { action: Action, modal: Modal } = props;

  const [isOpen, setIsOpen] = useState(false);

  function handleSearchButtonClick() {
    setIsOpen(!isOpen);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Action onClick={handleSearchButtonClick} />

      {isOpen && <Modal onClose={handleModalClose} />}
    </>
  );
}
