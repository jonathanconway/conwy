import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  appColorIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
  memoryChipIllustrationStatic,
} from "../static";

export const simulatingStatesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "simulating-states",
    slots: [
      appColorIllustrationStatic,
      memoryChipIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: appColorIllustrationStatic.primaryColor!,
  });
