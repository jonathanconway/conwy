import { ReactNode } from "react";

import { Checklist } from "@/framework/client";

export interface ContentEmbedChecklistProps {
  readonly checklist: Checklist;
  readonly children: ReactNode;
}
