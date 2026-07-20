import { ArticleMeta, PostTags } from "@/framework/client";

import {
  crossLeggedIllustrationStatic,
  mindfulnessIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Mindfulness",
  blurb: "",
  shortBlurb:
    "Experiences practicing mindfulness meditation, from a sample size of one.",
  createdDate: "2024-09-13",
  slug: "mindfulness",
  type: "article",
  tags: [PostTags.Life],
  mainImage: mindfulnessIllustrationComposite,
  smallImage: crossLeggedIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: true,
};
