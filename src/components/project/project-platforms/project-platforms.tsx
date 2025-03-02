import { ProjectMeta } from "@/framework/client";

import { List } from "../../list";
import { Section } from "../../section";

import * as styles from "./project-platforms.css";

interface ProjectPlatformsProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectPlatforms(props: ProjectPlatformsProps) {
  if (props.projectMeta.platforms.length === 0) {
    return null;
  }

  return (
    <Section label="Platforms">
      <List>
        {props.projectMeta.platforms.map((platform) => (
          <li key={platform} className={styles.platformText}>
            {platform}
          </li>
        ))}
      </List>
    </Section>
  );
}
