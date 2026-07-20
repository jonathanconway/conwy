import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  bulbDynamicColorIllustrationStatic,
  curveIllustrationStatic,
  pencilFrontColorIllustrationStatic,
} from "../static";

export const studyingCalculusIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "studying-calculus",
    slots: [
      curveIllustrationStatic,
      bulbDynamicColorIllustrationStatic,
      pencilFrontColorIllustrationStatic,
    ],
    primaryColor: curveIllustrationStatic.primaryColor!,
  });
