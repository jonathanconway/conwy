import {
  absolute,
  all,
  cn,
  m_4,
  pr_14,
  relative,
  right_0,
  top_0,
} from "@jonathanconway/tailwindjs";

export const container = cn(relative);

export const toolbarContainer = cn(absolute, right_0, top_0, m_4);

export const main = cn(all(pr_14));
