"use client";

import { Backdrop } from "../backdrop";
import { Heading } from "../heading";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";

import { ModalProps } from "./modal-props";
import * as styles from "./modal.css";
import { useModal } from "./use-modal.hook";

export function Modal(props: ModalProps) {
  const { handleBackdropClick } = useModal(props);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <dialog className={styles.modal}>
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
      </dialog>
    </Backdrop>
  );
}
