import { TypeOfConst } from "@/framework/client";

export const HeadingLevels = {
  Level1: 1,
  Level2: 2,
  Level3: 3,
  Level4: 4,
  Level5: 5,
};

export type HeadingLevel = TypeOfConst<typeof HeadingLevels>;
