import { ArticleMeta, PostTags } from "@/framework/client";

import {
  codeBracesIllustrationStatic,
  codeSketchesIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Code sketches",
  blurb:
    "Using commented ellipses, we can create 'code sketches' to aid communication.",
  createdDate: "2026-07-09",
  slug: "code-sketches",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: codeSketchesIllustrationComposite,
  smallImage: codeBracesIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: false,
};
