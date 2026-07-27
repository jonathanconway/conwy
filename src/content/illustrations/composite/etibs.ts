import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicPremiumIllustrationStatic,
  moneyBagDynamicColorIllustrationStatic,
  percentageIllustrationStatic,
} from "../static";

export const etibsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "etibs",
    illustrations: [
      percentageIllustrationStatic,
      moneyBagDynamicColorIllustrationStatic,
      cubeDynamicPremiumIllustrationStatic,
    ],
    primaryColor: percentageIllustrationStatic.primaryColor!,
  });
