import { createProjectMock } from "@/framework";

export function createProjectsListItemMock() {
  return {
    projectMeta: createProjectMock().meta,
  };
}
