import { ProjectMeta } from "@/framework/client";

import { ProjectListItem } from "../project-list-item";

import * as styles from "./projects-list.styles";

export interface ProjectsListProps {
  readonly projectMetas: readonly ProjectMeta[];
}

export function ProjectsList({ projectMetas }: ProjectsListProps) {
  return (
    <div className={styles.container()}>
      {projectMetas.map((projectMeta) => (
        <ProjectListItem key={projectMeta.slug} projectMeta={projectMeta} />
      ))}
    </div>
  );
}
