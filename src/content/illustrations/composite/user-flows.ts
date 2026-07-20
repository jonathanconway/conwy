import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  girlIsoColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  routeIllustrationStatic,
} from "../static";

export const userFlowsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "user-flows",
    slots: [
      girlIsoColorIllustrationStatic,
      routeIllustrationStatic,
      pencilFrontColorIllustrationStatic,
    ],
    primaryColor: pencilFrontColorIllustrationStatic.primaryColor!,
  });
