import { Section } from "../../section";
import { SocialLinksList } from "../../social-links";

import { WorkLinksProps } from "./work-links.types";

export function WorkLinks(props: WorkLinksProps) {
  const { workMeta } = props;

  if (workMeta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Links">
      <SocialLinksList socialLinks={props.workMeta.socialLinks} />
    </Section>
  );
}
