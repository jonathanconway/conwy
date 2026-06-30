import { ReactNode } from "react";

import { ChecklistMeta } from "@/framework/client";

export interface ChecklistContainerProps {
  readonly children: ReactNode;
  readonly checklistMeta: ChecklistMeta;
}
