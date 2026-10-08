import { ProjectMeta } from "@/framework/client";

import { ListItem, UnorderedList } from "../../list";
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
      <UnorderedList>
        {props.projectMeta.platforms.map((platform) => (
          <ListItem key={platform}>{platform}</ListItem>
        ))}
      </UnorderedList>
    </Section>
  );
}
