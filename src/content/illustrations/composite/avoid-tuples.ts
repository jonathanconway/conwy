import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  cubeDynamicClayIllustrationStatic,
} from "../static";

export const avoidTuplesIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "avoid-tuples",
    illustrations: [
      cubeDynamicClayIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
      codeBracesIllustrationStatic,
    ],
    primaryColor: cubeDynamicClayIllustrationStatic.primaryColor!,
  });
