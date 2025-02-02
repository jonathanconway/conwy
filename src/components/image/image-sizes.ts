import { TypeOfConst } from "@/framework";

export const ImageSizes = {
  Small: "small",
  IconSmall: "icon-small",
  IconMedium: "icon-medium",
} as const;

export type ImageSize = TypeOfConst<typeof ImageSizes>;
