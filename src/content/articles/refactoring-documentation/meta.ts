import { ArticleMeta, PostTags } from "@/framework/client";

import {
  cycleIllustrationStatic,
  refactoringDocumentationIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Refactoring vs documentation",
  blurb: "How documentation can substitute for big refactorings.",
  createdDate: "2023-07-02",
  slug: "refactoring-documentation",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: refactoringDocumentationIllustrationComposite,
  smallImage: cycleIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: true,
};
