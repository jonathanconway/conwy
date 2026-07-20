import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  appleFruitIllustrationStatic,
  gymDynamicPremiumIllustrationStatic,
  roadIllustrationStatic,
} from "../static";

export const loseWeightIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "lose-weight",
    slots: [
      appleFruitIllustrationStatic,
      gymDynamicPremiumIllustrationStatic,
      roadIllustrationStatic,
    ],
    primaryColor: roadIllustrationStatic.primaryColor!,
  });
