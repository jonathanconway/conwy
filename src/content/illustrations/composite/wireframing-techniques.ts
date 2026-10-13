import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  cubeDynamicColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  sphereDynamicColorIllustrationStatic,
} from "../static";

export const wireframingTechniquesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "wireframing-techniques",
    illustrations: [
      pencilFrontColorIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
      sphereDynamicColorIllustrationStatic,
    ],
    primaryColor: cubeDynamicColorIllustrationStatic.primaryColor!,
  });
