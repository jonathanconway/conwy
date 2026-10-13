import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  bulbDynamicColorIllustrationStatic,
  curveIllustrationStatic,
  pencilFrontColorIllustrationStatic,
} from "../static";

export const studyingCalculusIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "studying-calculus",
    illustrations: [
      curveIllustrationStatic,
      bulbDynamicColorIllustrationStatic,
      pencilFrontColorIllustrationStatic,
    ],
    primaryColor: curveIllustrationStatic.primaryColor!,
  });
