import { ArticleMeta, PostTags } from "@/framework/client";

import {
  memoryChipIllustrationStatic,
  simulatingStatesIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Simulating application states",
  blurb: "",
  shortBlurb:
    "Review of simulation techniques and ideas for structuring and documenting simulations.",
  createdDate: "2025-02-12",
  slug: "simulating-states",
  type: "article",
  mainImage: simulatingStatesIllustrationComposite,
  smallImage: memoryChipIllustrationStatic,
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [],
  discussionLinks: [],
};
