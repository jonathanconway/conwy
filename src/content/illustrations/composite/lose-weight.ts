import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  appleFruitIllustrationStatic,
  gymDynamicPremiumIllustrationStatic,
  roadIllustrationStatic,
} from "../static";

export const loseWeightIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "lose-weight",
    illustrations: [
      appleFruitIllustrationStatic,
      gymDynamicPremiumIllustrationStatic,
      roadIllustrationStatic,
    ],
    primaryColor: roadIllustrationStatic.primaryColor!,
  });
