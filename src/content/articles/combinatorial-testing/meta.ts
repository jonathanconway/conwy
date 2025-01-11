import { ArticleMeta, PostTags, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Combinatorial testing",
  blurb: "",
  shortBlurb: "Increase your test coverage with combinatorial testing",
  date: "2022-10-10",
  slug: "combinatorial-testing",
  type: "article",
  tags: [PostTags.SoftwareDevelopment],
  mainImage: {
    src: "/images/articles/combinatorial-testing/main.jpg",
  },
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/increase-your-test-coverage-with-combinatorial-testing-ak2",
    },
  ],
  discussionLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/increase-your-test-coverage-with-combinatorial-testing-ak2#comments",
      likeCount: 2,
    },
  ],
};
