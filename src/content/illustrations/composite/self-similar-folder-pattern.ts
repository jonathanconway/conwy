import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  cubeDynamicColorIllustrationStatic,
  fileTextDynamicColorIllustrationStatic,
  folderDynamicColorIllustrationStatic,
} from "../static";

export const selfSimilarFolderPatternIllustration =
  createIllustrationCompositePost3Circle({
    slug: "self-similar-folder-pattern",
    illustrations: [
      folderDynamicColorIllustrationStatic,
      fileTextDynamicColorIllustrationStatic,
      cubeDynamicColorIllustrationStatic,
    ],
    primaryColor: cubeDynamicColorIllustrationStatic.primaryColor!,
  });
