import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  crossLeggedIllustrationStatic,
  sunDynamicColorIllustrationStatic,
  treesIllustrationStatic,
} from "../static";

export const mindfulnessIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "mindfulness",
    illustrations: [
      treesIllustrationStatic,
      sunDynamicColorIllustrationStatic,
      crossLeggedIllustrationStatic,
    ],
    primaryColor: treesIllustrationStatic.primaryColor!,
  });
