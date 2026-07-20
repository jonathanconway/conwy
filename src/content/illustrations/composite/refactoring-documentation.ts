import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  cycleIllustrationStatic,
  fileTextIsoColorIllustrationStatic,
} from "../static";

export const refactoringDocumentationIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "refactoring-documentation",
    slots: [
      fileTextIsoColorIllustrationStatic,
      codeBracesIllustrationStatic,
      cycleIllustrationStatic,
    ],
    primaryColor: fileTextIsoColorIllustrationStatic.primaryColor!,
  });
