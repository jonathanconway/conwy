import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  bulbDynamicColorIllustrationStatic,
  fileTextDynamicColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiConceptsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-concepts",
    slots: [
      robotColorIllustrationStatic,
      bulbDynamicColorIllustrationStatic,
      fileTextDynamicColorIllustrationStatic,
    ],
    primaryColor: bulbDynamicColorIllustrationStatic.primaryColor!,
  });
