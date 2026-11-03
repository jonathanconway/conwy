import { createImagesMock } from "@/framework";

import { ImageSetProps } from "./image-set-props";

export function createImageSetPropsMock(): ImageSetProps {
  return {
    images: createImagesMock(),
  };
}
