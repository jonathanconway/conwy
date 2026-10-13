import { createWithHOC } from "@/framework";

import { Tooltip } from "./tooltip";

export const withTooltip = createWithHOC(Tooltip, "tooltip");
