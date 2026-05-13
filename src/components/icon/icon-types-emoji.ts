import { PointRightFinger } from "./emoji";
import { IconComponent } from "./icon-component";
import { IconType, IconTypes } from "./icon-types";

export const ICON_TYPE_EMOJIS: Partial<Record<IconType, IconComponent>> = {
  [IconTypes.PointRightFinger]: PointRightFinger,
};
