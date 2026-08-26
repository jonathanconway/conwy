import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

import {
  chatBubbleDynamicGradientIllustrationStatic,
  codeReviewsIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Streamlining code reviews",
  blurb:
    "Having a good code review process can make code reviews easier, more enjoyable and higher quality",
  createdDate: "2023-08-06",
  slug: "code-reviews",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: codeReviewsIllustrationComposite,
  smallImage: chatBubbleDynamicGradientIllustrationStatic,
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/streamlining-code-reviews-4016",
    },
    {
      type: SocialLinkTypes.LinkedIn,
      url: "https://www.linkedin.com/pulse/streamlining-code-reviews-jonathan-conway",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Twitter,
      url: "https://x.com/conw_y/status/1688050838932209664",
      commentCount: 1,
    },
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/streamlining-code-reviews-4016#comments",
      likeCount: 3,
    },
    {
      type: SocialLinkTypes.Reddit,
      url: "https://www.reddit.com/r/AskProgramming/comments/1vro0sr/comment/p4imgtx",
      likeCount: 1,
    },

    {
      type: SocialLinkTypes.Reddit,
      url: "https://www.reddit.com/r/cscareerquestions/comments/za2ill/how_do_you_review_a_pull_request/",
    },
    {
      type: SocialLinkTypes.Reddit,
      url: "https://www.reddit.com/r/ExperiencedDevs/comments/175e65h/pull_request_review_how_picky_to_be/",
    },
    {
      type: SocialLinkTypes.Reddit,
      url: "https://www.reddit.com/r/AskProgramming/comments/1nzjiex/senior_engineers_how_do_you_review_pull_requests/",
    },
  ],
  isPinned: true,
};
