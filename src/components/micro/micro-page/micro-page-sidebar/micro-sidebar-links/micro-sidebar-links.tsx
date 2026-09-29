import { MicroMeta } from "@/framework/client";

import { Section } from "../../../../section";
import { SocialLinksList } from "../../../../social-links";

interface MicroSidebarLinksProps {
  readonly microMeta: MicroMeta;
}

export function MicroSidebarLinks(props: MicroSidebarLinksProps) {
  if (props.microMeta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Related links">
      <SocialLinksList socialLinks={props.microMeta.socialLinks} />
    </Section>
  );
}
