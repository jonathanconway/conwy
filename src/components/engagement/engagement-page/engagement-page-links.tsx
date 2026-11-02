import { Engagement } from "@/framework";

import { Section } from "../../section";
import { SocialLinksList } from "../../social-links";

interface EngagementPageLinksProps {
  readonly engagement: Engagement;
}

export function EngagementPageLinks(props: EngagementPageLinksProps) {
  const { engagement } = props;
  const { meta } = engagement;

  if (meta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Links">
      <SocialLinksList socialLinks={meta.socialLinks} />
    </Section>
  );
}
