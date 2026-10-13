import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  cubeDynamicClayIllustrationStatic,
  reactColorIllustrationStatic,
  road2LaneIllustrationStatic,
} from "../static";

export const parallelLoadingReactIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "parallel-loading-react",
    illustrations: [
      road2LaneIllustrationStatic,
      reactColorIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: road2LaneIllustrationStatic.primaryColor!,
  });
