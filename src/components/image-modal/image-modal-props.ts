import { Image } from "@/framework";

export interface ImageModalProps {
  readonly images: readonly Image[];
  readonly defaultImage?: Image;
  readonly isUrlAddressable?: boolean;

  readonly onClose: VoidFunction;
}
