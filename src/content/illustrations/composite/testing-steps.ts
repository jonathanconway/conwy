import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  fileTextIsoColorIllustrationStatic,
  labDynamicColorIllustrationStatic,
  routeIllustrationStatic,
} from "../static";

export const testingStepsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "testing-steps",
    illustrations: [
      routeIllustrationStatic,
      labDynamicColorIllustrationStatic,
      fileTextIsoColorIllustrationStatic,
    ],
    primaryColor: fileTextIsoColorIllustrationStatic.primaryColor!,
  });
