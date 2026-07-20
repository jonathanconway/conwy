import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  documentIllustrationStatic,
  mouseColorIllustrationStatic,
  paintBrushIsoColor,
} from "../static";

export const designerlyCvIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "designerly-cv",
    slots: [
      documentIllustrationStatic,
      paintBrushIsoColor,
      mouseColorIllustrationStatic,
    ],
    primaryColor: documentIllustrationStatic.primaryColor!,
  });
