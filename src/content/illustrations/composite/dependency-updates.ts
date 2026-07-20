import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicColorIllustrationStatic,
  packageIllustrationStatic,
  sheildDynamicColorIllustrationStatic,
} from "../static";

export const dependencyUpdatesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "dependency-updates",
    slots: [
      packageIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
      sheildDynamicColorIllustrationStatic,
    ],
    primaryColor: packageIllustrationStatic.primaryColor!,
  });
