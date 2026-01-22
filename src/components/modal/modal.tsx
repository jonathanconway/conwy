"use client";

import { Backdrop } from "../backdrop";
import { Heading } from "../heading";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";

import { ModalFocusTrapSink } from "./modal-focus-trap/modal-focus-trap-sink";
import { ModalProps } from "./modal-props";
import * as styles from "./modal.css";
import { useModal } from "./use-modal.hook";

export function Modal(props: ModalProps) {
  const { modalRef, handleTrapInputFocus, handleBackdropClick } =
    useModal(props);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalFocusTrapSink onFocus={handleTrapInputFocus} />

      <dialog className={props.className ?? styles.modal} ref={modalRef}>
        <header className={styles.modalHeader}>
          {props.title && (
            <Heading level={2} className={styles.modalTitle}>
              {props.title}
            </Heading>
          )}

          {props.toolbar && (
            <div className={styles.modalToolbar}>
              {props.toolbar}

              <IconButton
                icon={IconTypes.Close}
                tooltip={{ contents: "Close" }}
                onClick={props.onClose}
              />
            </div>
          )}
        </header>

        <div className={styles.modalMain}>{props.children}</div>

        <ModalFocusTrapSink onFocus={handleTrapInputFocus} />
      </dialog>
    </Backdrop>
  );
}
