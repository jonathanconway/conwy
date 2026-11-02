import { Section } from "../../../section";
import { SocialLinksList } from "../../../social-links";

import { WorkPageLinksProps } from "./work-page-links-props";

export function WorkPageLinks(props: WorkPageLinksProps) {
  const { work } = props;
  const { meta } = work;

  if (meta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Links">
      <SocialLinksList socialLinks={meta.socialLinks} />
    </Section>
  );
}
