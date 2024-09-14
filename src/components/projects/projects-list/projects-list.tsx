import { ProjectMeta } from "@/framework/client";

import { ProjectsListItem } from "./projects-list-item";
import * as styles from "./projects-list.styles";

export interface ProjectsListProps {
  readonly projectMetas: readonly ProjectMeta[];
}

export function ProjectsList({ projectMetas }: ProjectsListProps) {
  return (
    <div className={styles.container()}>
      {projectMetas.map((projectMeta) => (
        <ProjectsListItem key={projectMeta.slug} projectMeta={projectMeta} />
      ))}
    </div>
  );
}
