import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeHtmlColorIllustrationStatic,
  webBrowserIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const frontEndObservabilityIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "front-end-observability",
    slots: [
      webBrowserIllustrationStatic,
      codeHtmlColorIllustrationStatic,
      zoomDynamicColorIllustrationStatic,
    ],
    primaryColor: codeHtmlColorIllustrationStatic.primaryColor!,
  });
