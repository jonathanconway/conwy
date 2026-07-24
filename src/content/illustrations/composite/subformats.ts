import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeHtmlColorIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
  mdIllustrationStatic,
} from "../static";

export const subformatsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "subformats",
    illustrations: [
      mdIllustrationStatic,
      codeHtmlColorIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: mdIllustrationStatic.primaryColor!,
  });
