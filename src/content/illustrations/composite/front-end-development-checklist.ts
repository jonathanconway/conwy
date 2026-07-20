import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  chatBubbleDynamicGradientIllustrationStatic,
  codeHtmlColorIllustrationStatic,
  tickDynamicColorIllustrationStatic,
} from "../static";

export const frontEndDevelopmentChecklistIllustration =
  createIllustrationCompositePost3Circle({
    slug: "front-end-development-checklist",
    slots: [
      tickDynamicColorIllustrationStatic,
      chatBubbleDynamicGradientIllustrationStatic,
      codeHtmlColorIllustrationStatic,
    ],
    primaryColor: tickDynamicColorIllustrationStatic.primaryColor!,
  });
