import { Project } from "@/framework";

import { EngagementPageBody } from "../../engagement";
import { Section } from "../../section";

interface ProjectPageSummaryProps {
  readonly project: Project;
}

export function ProjectPageSummary(props: ProjectPageSummaryProps) {
  const { project } = props;
  return (
    <Section label="Summary">
      <EngagementPageBody engagement={project} />
    </Section>
  );
}
