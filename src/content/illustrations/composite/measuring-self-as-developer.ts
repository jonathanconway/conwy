import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  girlIsoColorIllustrationStatic,
  tapeMeterIllustrationStatic,
  targetDynamicColorIllustrationStatic,
} from "../static";

export const measuringSelfAsDeveloperIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "measuring-self-as-developer",
    illustrations: [
      tapeMeterIllustrationStatic,
      girlIsoColorIllustrationStatic,
      targetDynamicColorIllustrationStatic,
    ],
    primaryColor: tapeMeterIllustrationStatic.primaryColor!,
  });
