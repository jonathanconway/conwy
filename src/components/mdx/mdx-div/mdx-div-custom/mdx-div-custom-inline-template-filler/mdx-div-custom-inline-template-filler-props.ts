import { ReactNode } from "react";

export interface MdxDivCustomInlineTemplateFillerProps {
  readonly inlineTemplateFieldDefaults: Record<string, string>;
  readonly children?: ReactNode;
}
