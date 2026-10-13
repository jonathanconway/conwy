import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  girlIsoColorIllustrationStatic,
  pencilFrontColorIllustrationStatic,
  routeIllustrationStatic,
} from "../static";

export const userFlowsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "user-flows",
    illustrations: [
      girlIsoColorIllustrationStatic,
      routeIllustrationStatic,
      pencilFrontColorIllustrationStatic,
    ],
    primaryColor: pencilFrontColorIllustrationStatic.primaryColor!,
  });
