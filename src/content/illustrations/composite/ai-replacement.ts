import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  chartDynamicColorIllustrationStatic,
  girlIsoColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiReplacementIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-replacement",
    illustrations: [
      robotColorIllustrationStatic,
      girlIsoColorIllustrationStatic,
      chartDynamicColorIllustrationStatic,
    ],
    primaryColor: chartDynamicColorIllustrationStatic.primaryColor!,
  });
