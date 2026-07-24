import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  pathIllustrationStatic,
  zoomDynamicColorIllustrationStatic,
} from "../static";

export const visualisingExecutionFlowsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "visualising-execution-flows",
    illustrations: [
      codeBracesIllustrationStatic,
      pathIllustrationStatic,
      zoomDynamicColorIllustrationStatic,
    ],
    primaryColor: pathIllustrationStatic.primaryColor!,
  });
