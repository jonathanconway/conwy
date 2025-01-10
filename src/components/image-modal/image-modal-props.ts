import { Image } from "@/framework/client";

export interface ImageModalProps {
  readonly images: readonly Image[];
  readonly defaultImage?: Image;

  readonly onClose: VoidFunction;
}
