import { MouseEventHandler, ReactNode } from "react";

export interface ModalProps {
  readonly title?: ReactNode;
  readonly children?: ReactNode;
  readonly toolbar?: ReactNode;

  readonly onClose?: VoidFunction;
}
