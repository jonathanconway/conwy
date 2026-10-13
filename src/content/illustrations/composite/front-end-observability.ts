import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeHtmlColorIllustrationStatic,
  webBrowserIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const frontEndObservabilityIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "front-end-observability",
    illustrations: [
      webBrowserIllustrationStatic,
      codeHtmlColorIllustrationStatic,
      zoomDynamicColorIllustrationStatic,
    ],
    primaryColor: codeHtmlColorIllustrationStatic.primaryColor!,
  });
