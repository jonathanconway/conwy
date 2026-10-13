import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeBracesHtmlIllustrationStatic,
  serverIllustrationStatic,
  webBrowserIllustrationStatic,
} from "../static";

export const fullStackIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "full-stack",
    illustrations: [
      webBrowserIllustrationStatic,
      serverIllustrationStatic,
      codeBracesHtmlIllustrationStatic,
    ],
    primaryColor: webBrowserIllustrationStatic.primaryColor!,
  });
