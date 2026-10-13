import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  cubeDynamicColorIllustrationStatic,
  packageIllustrationStatic,
  sheildDynamicColorIllustrationStatic,
} from "../static";

export const dependencyUpdatesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "dependency-updates",
    illustrations: [
      packageIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
      sheildDynamicColorIllustrationStatic,
    ],
    primaryColor: packageIllustrationStatic.primaryColor!,
  });
