import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  computerDynamicColorIllustrationStatic,
  labDynamicColorIllustrationStatic,
  mouseColorIllustrationStatic,
} from "../static";

export const manualTestingIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "manual-testing",
    illustrations: [
      mouseColorIllustrationStatic,
      computerDynamicColorIllustrationStatic,
      labDynamicColorIllustrationStatic,
    ],
    primaryColor: labDynamicColorIllustrationStatic.primaryColor!,
  });
