import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  bulbDynamicColorIllustrationStatic,
  fileTextDynamicColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiConceptsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-concepts",
    illustrations: [
      robotColorIllustrationStatic,
      bulbDynamicColorIllustrationStatic,
      fileTextDynamicColorIllustrationStatic,
    ],
    primaryColor: bulbDynamicColorIllustrationStatic.primaryColor!,
  });
