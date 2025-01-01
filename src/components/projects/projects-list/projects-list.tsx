import { ProjectMeta } from "@/framework/client";

import { List } from "../../list";

import { ProjectsListItem } from "./projects-list-item";

export interface ProjectsListProps {
  readonly projectMetas: readonly ProjectMeta[];
}

export function ProjectsList({ projectMetas }: ProjectsListProps) {
  return (
    <List>
      {projectMetas.map((projectMeta) => (
        <ProjectsListItem key={projectMeta.slug} projectMeta={projectMeta} />
      ))}
    </List>
  );
}
