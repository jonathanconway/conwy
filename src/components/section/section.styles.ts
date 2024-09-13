import { cn, flex, flex_1, flex_col, gap_2 } from "@jonathanconway/tailwindjs";

import * as labelStyles from "../label/label.styles";

export const container = cn(flex, flex_1, flex_col, gap_2);

export const label = labelStyles.label;
