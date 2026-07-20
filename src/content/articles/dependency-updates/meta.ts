import { ArticleMeta, PostTags } from "@/framework/client";

import {
  dependencyUpdatesIllustrationComposite,
  packageIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Dependency updates",
  blurb:
    "Having a process around handling dependency updates can smooth the updates while minimising vulnerabilities.",
  shortBlurb:
    "Having a process around handling dependency updates can smooth the updates while minimising vulnerabilities.",
  createdDate: "2026-07-08",
  slug: "dependency-updates",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: dependencyUpdatesIllustrationComposite,
  smallImage: packageIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: false,
};
