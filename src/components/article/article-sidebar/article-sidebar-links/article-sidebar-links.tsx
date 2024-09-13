import { ArticleMeta } from "@/framework/client";

import { Section } from "../../../section";
import { SocialLinksList } from "../../../social-links";

interface ArticleSidebarLinksProps {
  readonly articleMeta: ArticleMeta;
}

export function ArticleSidebarLinks(props: ArticleSidebarLinksProps) {
  if (props.articleMeta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Related links">
      <SocialLinksList socialLinks={props.articleMeta.socialLinks} />
    </Section>
  );
}
