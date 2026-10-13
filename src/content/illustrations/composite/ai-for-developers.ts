import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeBracesIllustrationStatic,
  girlIsoColorIllustrationStatic,
  robotColorIllustrationStatic,
} from "../static";

export const aiForDevelopersIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ai-for-developers",
    illustrations: [
      robotColorIllustrationStatic,
      codeBracesIllustrationStatic,
      girlIsoColorIllustrationStatic,
    ],
    primaryColor: robotColorIllustrationStatic.primaryColor!,
  });
