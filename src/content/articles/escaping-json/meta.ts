import {
  escapingJsonIllustrationComposite,
  jsonFileIllustrationStatic,
} from "@/content/illustrations";
import { ArticleMeta, PostTags } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "Escaping JSON",
  blurb: "",
  createdDate: "2026-10-01",
  slug: "escaping-json",
  tags: [PostTags.SoftwareDevelopment],
  smallImage: jsonFileIllustrationStatic,
  mainImage: escapingJsonIllustrationComposite,
  socialLinks: [],
  discussionLinks: [],
};
