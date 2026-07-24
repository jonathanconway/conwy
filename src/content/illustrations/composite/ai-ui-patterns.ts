import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicClayIllustrationStatic,
  robotColorIllustrationStatic,
  webBrowserIllustrationStatic,
} from "../static";

export const aiUiPatternsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-ui-patterns",
    illustrations: [
      robotColorIllustrationStatic,
      webBrowserIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: robotColorIllustrationStatic.primaryColor!,
  });
