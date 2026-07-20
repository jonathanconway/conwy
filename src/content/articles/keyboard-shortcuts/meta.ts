import { ArticleMeta, PostTags } from "@/framework/client";

import {
  keyboardIllustrationStatic,
  keyboardShortcutsIllustrationComposite,
} from "../../illustrations";

export const meta: ArticleMeta = {
  title: "Keyboard shortcuts",
  blurb: "My favourite keystrokes for getting stuff done fast",
  createdDate: "2025-01-21",
  slug: "keyboard-shortcuts",
  type: "article",
  mainImage: keyboardShortcutsIllustrationComposite,
  smallImage: keyboardIllustrationStatic,
  tags: [PostTags.SoftwareDevelopment],
  socialLinks: [],
  discussionLinks: [],
};
