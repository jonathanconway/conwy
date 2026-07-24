import { createIllustrationCompositePost3Circle } from "@/framework/client";

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
