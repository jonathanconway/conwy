import { createProjectMock } from "@/framework/client";

export function createProjectsListItemMock() {
  return {
    projectMeta: createProjectMock().meta,
  };
}
