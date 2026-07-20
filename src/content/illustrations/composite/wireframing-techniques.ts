import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  sphereDynamicColorIllustrationStatic,
} from "../static";

export const wireframingTechniquesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "wireframing-techniques",
    slots: [
      pencilFrontColorIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
      sphereDynamicColorIllustrationStatic,
    ],
    primaryColor: cubeDynamicColorIllustrationStatic.primaryColor!,
  });
