import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  girlIsoColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiForDevelopersIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-for-developers",
    slots: [
      robotColorIllustrationStatic,
      codeBracesIllustrationStatic,
      girlIsoColorIllustrationStatic,
    ],
    primaryColor: robotColorIllustrationStatic.primaryColor!,
  });
