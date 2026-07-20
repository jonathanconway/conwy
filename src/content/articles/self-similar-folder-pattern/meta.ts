import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  folderDynamicColorIllustrationStatic,
  selfSimilarFolderPatternIllustration,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Self-similar: a versatile folder pattern for code",
  blurb:
    "Folder pattern I have been using to organise more complex code projects.",
  createdDate: "2026-03-02",
  slug: "self-similar-folder-pattern",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: selfSimilarFolderPatternIllustration,
  smallImage: folderDynamicColorIllustrationStatic,
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/self-similar-a-versatile-folder-pattern-for-code-d18",
      likeCount: 4,
    },
  ],
  socialLinks: [],
  isPinned: true,
};
