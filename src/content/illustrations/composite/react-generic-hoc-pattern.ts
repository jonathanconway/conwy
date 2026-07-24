import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeHtmlColorIllustrationStatic,
  lambdaIllustrationStatic,
  reactColorIllustrationStatic,
} from "../static";

export const reactGenericHocPatternIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "react-generic-hoc-pattern",
    illustrations: [
      lambdaIllustrationStatic,
      reactColorIllustrationStatic,
      codeHtmlColorIllustrationStatic,
    ],
    primaryColor: reactColorIllustrationStatic.primaryColor!,
  });
