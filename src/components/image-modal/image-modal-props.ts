import { RefObject } from "react";

import { Image } from "@/framework";

export interface ImageModalProps {
  readonly images: readonly Image[];
  readonly defaultImage?: Image;
  readonly isUrlAddressable?: boolean;
  readonly triggerRef?: RefObject<HTMLElement | null>;

  readonly onClose: VoidFunction;
}
