import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cloudIllustrationStatic,
  labDynamicColorIllustrationStatic,
  terminalIllustrationStatic,
} from "../static";

export const unitTestsCloudIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "unit-tests-cloud",
    illustrations: [
      labDynamicColorIllustrationStatic,
      terminalIllustrationStatic,
      cloudIllustrationStatic,
    ],
    primaryColor: labDynamicColorIllustrationStatic.primaryColor!,
  });
