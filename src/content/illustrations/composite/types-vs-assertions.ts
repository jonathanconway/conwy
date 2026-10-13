import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeBracesIllustrationStatic,
  tickDynamicColorIllustrationStatic,
  typescriptIllustrationStatic,
} from "../static";

export const typesVsAssertionsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "types-vs-assertions",
    illustrations: [
      typescriptIllustrationStatic,
      codeBracesIllustrationStatic,
      tickDynamicColorIllustrationStatic,
    ],
    primaryColor: codeBracesIllustrationStatic.primaryColor!,
  });
