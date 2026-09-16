import { JSX } from "react";

import { ModalProps } from "../modal/modal-props";

export interface ActionAndModalProps {
  readonly action: (props: { onClick?: VoidFunction }) => JSX.Element;
  readonly modal: (props: ModalProps) => JSX.Element;
}
