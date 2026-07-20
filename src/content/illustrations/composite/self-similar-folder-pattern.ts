import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicColorIllustrationStatic,
  fileTextDynamicColorIllustrationStatic,
  folderDynamicColorIllustrationStatic,
} from "../static";

export const selfSimilarFolderPatternIllustration =
  createIllustrationCompositePost3Circle({
    slug: "self-similar-folder-pattern",
    slots: [
      folderDynamicColorIllustrationStatic,
      fileTextDynamicColorIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
    ],
    primaryColor: cubeDynamicColorIllustrationStatic.primaryColor!,
  });
