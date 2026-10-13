import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeHtmlColorIllustrationStatic,
  computerDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
} from "../static";

export const codeSketchesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "code-sketches",
    illustrations: [
      codeHtmlColorIllustrationStatic,
      pencilFrontColorIllustrationStatic,
      computerDynamicColorIllustrationStatic,
    ],
    primaryColor: pencilFrontColorIllustrationStatic.primaryColor!,
  });
