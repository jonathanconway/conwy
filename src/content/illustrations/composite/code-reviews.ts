import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  chatBubbleDynamicGradientIllustrationStatic,
  codeBracesIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const codeReviewsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "code-reviews",
    slots: [
      codeBracesIllustrationStatic,
      zoomDynamicColorIllustrationStatic,
      chatBubbleDynamicGradientIllustrationStatic,
    ],
    primaryColor: codeBracesIllustrationStatic.primaryColor!,
  });
