import { TypeOfConst } from "@/framework/client";

export const ImageSizes = {
  Small: "small",
  IconSmall: "icon-small",
  IconXSmall: "icon-xsmall",
  IconMedium: "icon-medium",
  FillWidth: "fill-width",
} as const;

export type ImageSize = TypeOfConst<typeof ImageSizes>;
