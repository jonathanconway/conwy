import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  chatBubbleDynamicGradientIllustrationStatic,
  codeBracesIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const codeReviewsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "code-reviews",
    illustrations: [
      codeBracesIllustrationStatic,
      zoomDynamicColorIllustrationStatic,
      chatBubbleDynamicGradientIllustrationStatic,
    ],
    primaryColor: codeBracesIllustrationStatic.primaryColor!,
  });
