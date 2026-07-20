import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
  typescriptIllustrationStatic,
} from "../static";

export const typescriptEnumPatternsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "typescript-enum-patterns",
    slots: [
      typescriptIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
      codeBracesIllustrationStatic,
    ],
    primaryColor: cubeDynamicClayIllustrationStatic.primaryColor!,
  });
