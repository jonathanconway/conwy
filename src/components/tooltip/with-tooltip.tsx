import { createWithHOC } from "@/framework/client";

import { Tooltip } from "./tooltip";

export const withTooltip = createWithHOC(Tooltip, "tooltip");
