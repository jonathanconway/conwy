import { Project } from "@/framework";

import { ListItem, ListItemSpacingStrategies, ListUnordered } from "../../list";
import { Section } from "../../section";

interface ProjectPagePlatformsProps {
  readonly project: Project;
}

export function ProjectPagePlatforms(props: ProjectPagePlatformsProps) {
  const { project } = props;
  const { meta } = project;
  if (meta.platforms.length === 0) {
    return null;
  }

  return (
    <Section label="Platforms">
      <ListUnordered
        noBullets
        listItemSpacingStrategy={ListItemSpacingStrategies.Exclude}
      >
        {meta.platforms.map((platform) => (
          <ListItem key={platform}>{platform}</ListItem>
        ))}
      </ListUnordered>
    </Section>
  );
}
