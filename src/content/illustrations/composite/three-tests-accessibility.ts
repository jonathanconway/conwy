import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  earIllustrationStatic,
  handIllustrationStatic,
  labDynamicColorIllustrationStatic,
} from "../static";

export const threeTestsAccessibilityIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "three-tests-accessibility",
    illustrations: [
      handIllustrationStatic,
      earIllustrationStatic,
      labDynamicColorIllustrationStatic,
    ],
    primaryColor: earIllustrationStatic.primaryColor!,
  });
