import { Image as Image_ } from "@/framework/client";

export interface ImageCascadeProps {
  readonly images: readonly Image_[];
  readonly isUrlAddressable?: boolean;
}
