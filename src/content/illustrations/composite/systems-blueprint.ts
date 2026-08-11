import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  mapIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  terminalIllustrationStatic,
} from "../static";

export const systemsBlueprintIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "systems-blueprint",
    illustrations: [
      mapIllustrationStatic,
      pencilFrontColorIllustrationStatic,
      terminalIllustrationStatic,
    ],
    primaryColor: mapIllustrationStatic.primaryColor!,
  });
