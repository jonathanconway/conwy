import { WORK_META_MOCK } from "@/framework";

import { WorkProjectsProps } from "./work-projects.types";

export function createWorkProjectsPropsMock(): WorkProjectsProps {
  return {
    projects: WORK_META_MOCK.projects,
  };
}
