import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeHtmlColorIllustrationStatic,
  computerDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
} from "../static";

export const codeSketchesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "code-sketches",
    slots: [
      codeHtmlColorIllustrationStatic,
      pencilFrontColorIllustrationStatic,
      computerDynamicColorIllustrationStatic,
    ],
    primaryColor: pencilFrontColorIllustrationStatic.primaryColor!,
  });
