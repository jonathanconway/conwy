import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  computerDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  reactColorIllustrationStatic,
} from "../static";

export const diagrammingReactIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "diagramming-react",
    slots: [
      reactColorIllustrationStatic,
      pencilFrontColorIllustrationStatic,
      computerDynamicColorIllustrationStatic,
    ],
    primaryColor: reactColorIllustrationStatic.primaryColor!,
  });
