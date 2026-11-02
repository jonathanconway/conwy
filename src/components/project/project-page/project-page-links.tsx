import { Project } from "@/framework";

import { Section } from "../../section";
import { SocialLinksList } from "../../social-links";

interface ProjectLinksProps {
  readonly project: Project;
}

export function ProjectPageLinks(props: ProjectLinksProps) {
  const { project } = props;

  if (project.meta.socialLinks.length === 0) {
    return null;
  }

  return (
    <Section label="Links">
      <SocialLinksList socialLinks={props.project.meta.socialLinks} />
    </Section>
  );
}
