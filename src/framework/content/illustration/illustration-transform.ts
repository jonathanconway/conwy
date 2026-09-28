import { TypeOfConst } from "../../utils/typing";

export const IllustrationTransforms = {
  Rotate: "rotate",
  Flip: "flip",
} as const;

export type IllustrationTransform = TypeOfConst<typeof IllustrationTransforms>;
