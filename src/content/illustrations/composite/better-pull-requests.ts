import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  chatBubbleDynamicGradientIllustrationStatic,
  fileTextDynamicColorIllustrationStatic,
  pullRequestIllustrationStatic,
} from "../static";

export const betterPullRequestsIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "better-pull-requests",
    illustrations: [
      pullRequestIllustrationStatic,
      chatBubbleDynamicGradientIllustrationStatic,
      fileTextDynamicColorIllustrationStatic,
    ],
    primaryColor: pullRequestIllustrationStatic.primaryColor!,
  });
