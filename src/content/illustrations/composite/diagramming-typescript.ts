import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  computerDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  typescriptIllustrationStatic,
} from "../static";

export const diagrammingTypescriptIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "diagramming-typescript",
    slots: [
      typescriptIllustrationStatic,
      pencilFrontColorIllustrationStatic,
      computerDynamicColorIllustrationStatic,
    ],
    primaryColor: typescriptIllustrationStatic.primaryColor!,
  });
