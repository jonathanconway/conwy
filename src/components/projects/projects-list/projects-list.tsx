import { Project } from "@/framework";

import { ContentList } from "../../content-list";

import { ProjectsListItem } from "./projects-list-item";

export interface ProjectsListProps {
  readonly projects: readonly Project[];
}

export function ProjectsList(props: ProjectsListProps) {
  const { projects } = props;

  return (
    <ContentList>
      {projects.map((project) => (
        <ProjectsListItem key={project.meta.slug} project={project} />
      ))}
    </ContentList>
  );
}
