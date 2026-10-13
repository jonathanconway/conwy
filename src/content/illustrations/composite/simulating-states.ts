import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  appColorIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
  memoryChipIllustrationStatic,
} from "../static";

export const simulatingStatesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "simulating-states",
    illustrations: [
      appColorIllustrationStatic,
      memoryChipIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: appColorIllustrationStatic.primaryColor!,
  });
