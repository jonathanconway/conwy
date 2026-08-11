import { ArticleMeta, PostTags } from "@/framework/client";

import {
  mapIllustrationStatic,
  systemsBlueprintIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Living systems blueprint",
  blurb:
    "Diagramming the systems you work with for enhanced understanding and rapid navigation.",
  createdDate: "2026-08-08",
  slug: "living-systems-blueprint",
  type: "article",
  tags: [PostTags.SoftwareEngineering],
  mainImage: systemsBlueprintIllustrationComposite,
  smallImage: mapIllustrationStatic,
  socialLinks: [],
  discussionLinks: [],
  isPinned: true,
};
