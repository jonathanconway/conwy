import { cn, overflow_hidden, text_sm } from "@jonathanconway/tailwindjs";

import * as linkStyles from "../../link/link.styles";

export const textExpandableOuterContainer = cn(overflow_hidden);

export const textExpandableInnerContainer = cn();

export const toggleLink = cn(linkStyles.link, text_sm);
