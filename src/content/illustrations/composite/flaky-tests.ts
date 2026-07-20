import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  labDynamicColorIllustrationStatic,
  snowflakeDynamicColorIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const flakyTestsIllustration = createIllustrationCompositePost3Circle({
  slug: "flaky-tests",
  slots: [
    zoomDynamicColorIllustrationStatic,
    snowflakeDynamicColorIllustrationStatic,
    labDynamicColorIllustrationStatic,
  ],
  primaryColor: labDynamicColorIllustrationStatic.primaryColor!,
});
