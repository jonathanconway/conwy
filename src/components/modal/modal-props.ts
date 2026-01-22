import { MouseEventHandler, ReactNode } from "react";

export interface ModalProps {
  readonly title?: ReactNode;
  readonly children?: ReactNode;
  readonly toolbar?: ReactNode;
  readonly className?: string;

  readonly onClose?: VoidFunction;
}
