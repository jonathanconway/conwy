import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  flashDynamicColorIllustrationStatic,
  keyboardIllustrationStatic,
} from "../static";

export const keyboardShortcutsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "keyboard-shortcuts",
    slots: [
      keyboardIllustrationStatic,
      flashDynamicColorIllustrationStatic,
      codeBracesIllustrationStatic,
    ],
    primaryColor: keyboardIllustrationStatic.primaryColor!,
  });
