import { ProjectMeta } from "@/framework/client";

import { ListItem, ListUnordered } from "../../list";
import { Section } from "../../section";

interface ProjectPlatformsProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectPlatforms(props: ProjectPlatformsProps) {
  if (props.projectMeta.platforms.length === 0) {
    return null;
  }

  return (
    <Section label="Platforms">
      <ListUnordered noBullets>
        {props.projectMeta.platforms.map((platform) => (
          <ListItem key={platform} noSpacing>
            {platform}
          </ListItem>
        ))}
      </ListUnordered>
    </Section>
  );
}
