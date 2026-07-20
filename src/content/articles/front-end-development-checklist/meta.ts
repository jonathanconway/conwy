import { ArticleMeta, PostTags } from "@/framework/client";

import {
  frontEndDevelopmentChecklistIllustration,
  tickDynamicColorIllustrationStatic,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Front end development checklist",
  blurb: `A checklist of things to consider when developing front end applications.`,
  shortBlurb: `A checklist of things to consider when developing front end applications.`,
  createdDate: "2026-07-01",
  slug: "front-end-development-checklist",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: frontEndDevelopmentChecklistIllustration,
  smallImage: tickDynamicColorIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: true,
};
