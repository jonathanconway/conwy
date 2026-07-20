import { ArticleMeta, PostTags } from "@/framework/client";

import {
  sphereDynamicColorIllustrationStatic,
  wireframingTechniquesIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Wireframing techniques",
  blurb: `Using wireframes to depict elements and interactions together`,
  createdDate: "2020-12-30",
  slug: "interaction-wireframes",
  type: "article",
  tags: [PostTags.Design],
  isPinned: true,
  mainImage: wireframingTechniquesIllustrationComposite,
  smallImage: sphereDynamicColorIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
};
