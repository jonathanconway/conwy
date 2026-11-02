import { WORK_META_MOCK } from "@/framework";

import { WorkPageProjectsProps } from "./work-page-projects-props";

export function createWorkPageProjectsPropsMock(): WorkPageProjectsProps {
  return {
    projects: WORK_META_MOCK.projects,
  };
}
