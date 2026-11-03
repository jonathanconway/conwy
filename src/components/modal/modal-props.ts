import { ReactNode, RefObject } from "react";

export interface ModalProps {
  readonly title?: ReactNode;
  readonly children?: ReactNode;
  readonly toolbar?: ReactNode;
  readonly className?: string;

  readonly triggerRef?: RefObject<HTMLElement | null>;

  readonly onClose?: VoidFunction;
}
