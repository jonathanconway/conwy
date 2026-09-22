import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  magicHatWandIllustrationStatic,
  terminalIllustrationStatic,
} from "../static";

export const ephemeralWindowsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "ephemeral-windows",
    illustrations: [
      terminalIllustrationStatic,
      terminalIllustrationStatic,
      magicHatWandIllustrationStatic,
    ],
    primaryColor: magicHatWandIllustrationStatic.primaryColor!,
  });
