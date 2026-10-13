import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  circlesStackedDynamicGradientIllustrationStatic,
  labDynamicColorIllustrationStatic,
  sphereDynamicColorIllustrationStatic,
} from "../static";

export const mockDataIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "mock-data",
    illustrations: [
      circlesStackedDynamicGradientIllustrationStatic,
      labDynamicColorIllustrationStatic,
      sphereDynamicColorIllustrationStatic,
    ],
    primaryColor: sphereDynamicColorIllustrationStatic.primaryColor!,
  });
