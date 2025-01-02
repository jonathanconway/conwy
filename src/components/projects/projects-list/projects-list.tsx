import { ProjectMeta } from "@/framework/client";

import { ContentList } from "../../content-list";

import { ProjectsListItem } from "./projects-list-item";

export interface ProjectsListProps {
  readonly projectMetas: readonly ProjectMeta[];
}

export function ProjectsList({ projectMetas }: ProjectsListProps) {
  return (
    <ContentList>
      {projectMetas.map((projectMeta) => (
        <ProjectsListItem key={projectMeta.slug} projectMeta={projectMeta} />
      ))}
    </ContentList>
  );
}
