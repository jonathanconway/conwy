import { ReactNode } from "react";

import { Checklist } from "@/framework/client";

export interface MdxDivCustomChecklistProps {
  readonly checklist: Checklist;
  readonly children: ReactNode;
}
