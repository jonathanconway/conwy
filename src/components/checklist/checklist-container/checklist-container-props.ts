import { ReactNode } from "react";

import { ChecklistMeta } from "@/framework";

export interface ChecklistContainerProps {
  readonly children: ReactNode;
  readonly checklistMeta: ChecklistMeta;
}
