import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  bugIllustrationStatic,
  roadIllustrationStatic,
  tickDynamicColorIllustrationStatic,
} from "../static";

export const towardsZeroBugsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "towards-zero-bugs",
    slots: [
      bugIllustrationStatic,
      tickDynamicColorIllustrationStatic,
      roadIllustrationStatic,
    ],
    primaryColor: bugIllustrationStatic.primaryColor!,
  });
