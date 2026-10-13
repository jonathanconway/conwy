import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  codeBracesIllustrationStatic,
  flashDynamicColorIllustrationStatic,
  keyboardIllustrationStatic,
} from "../static";

export const keyboardShortcutsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "keyboard-shortcuts",
    illustrations: [
      keyboardIllustrationStatic,
      flashDynamicColorIllustrationStatic,
      codeBracesIllustrationStatic,
    ],
    primaryColor: keyboardIllustrationStatic.primaryColor!,
  });
