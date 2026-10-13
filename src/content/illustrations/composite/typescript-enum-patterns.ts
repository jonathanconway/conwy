import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeBracesIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
  typescriptIllustrationStatic,
} from "../static";

export const typescriptEnumPatternsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "typescript-enum-patterns",
    illustrations: [
      typescriptIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
      codeBracesIllustrationStatic,
    ],
    primaryColor: cubeDynamicClayIllustrationStatic.primaryColor!,
  });
