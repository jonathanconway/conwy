import { Section } from "../../section";
import { SocialLinksList } from "../../social-links";

import { ProjectLinksProps } from "./project-links.types";

export function ProjectLinks(props: ProjectLinksProps) {
  const { projectMeta } = props;

  if (projectMeta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Links">
      <SocialLinksList socialLinks={props.projectMeta.socialLinks} />
    </Section>
  );
}
