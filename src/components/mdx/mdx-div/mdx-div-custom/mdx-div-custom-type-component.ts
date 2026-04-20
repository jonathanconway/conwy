import { FunctionComponent } from "react";

import { MdxDivCustomChecklist } from "./mdx-div-custom-checklist";
import { MdxDivCustomTypes } from "./mdx-div-custom-types";
import { MdxInputCustomType } from "./mdx-input-custom-types";

export const MdxDivCustomTypeComponent: Record<
  MdxInputCustomType,
  FunctionComponent<any>
> = {
  [MdxDivCustomTypes.Checklist]: MdxDivCustomChecklist,
};
