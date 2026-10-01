import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  fileTextIsoColorIllustrationStatic,
  jsonFileIllustrationStatic,
} from "../static";

export const escapingJsonIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "escaping-json",
    illustrations: [
      jsonFileIllustrationStatic,
      codeBracesIllustrationStatic,
      fileTextIsoColorIllustrationStatic,
    ],
    primaryColor: jsonFileIllustrationStatic.primaryColor!,
  });
