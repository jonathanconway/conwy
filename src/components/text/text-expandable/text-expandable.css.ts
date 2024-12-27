import { style } from "@vanilla-extract/css";

import { cn } from "@/framework/client";

import * as linkStyles from "../../link/link.css";
import * as textStyles from "../text.css";

export const textExpandableOuterContainer = style({
  overflow: "hidden",
});

export const toggleLink = cn(linkStyles.link, textStyles.body);
