import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  chartDynamicColorIllustrationStatic,
  girlIsoColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiReplacementIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-replacement",
    slots: [
      robotColorIllustrationStatic,
      girlIsoColorIllustrationStatic,
      chartDynamicColorIllustrationStatic,
    ],
    primaryColor: chartDynamicColorIllustrationStatic.primaryColor!,
  });
