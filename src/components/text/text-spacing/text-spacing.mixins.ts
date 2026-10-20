import { CSSProperties } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { createNotFirstChildStyle } from "../../spacing/spacing.mixins";

import * as textSpacing from "./text-spacing.consts";

export const bodySpacing = {
  paddingTop: rems(textSpacing.body),
};
export const bodySpacingFirstChild = {
  ...createNotFirstChildStyle(bodySpacing),
};

export const collapsibleTitleSpacing = {};
export const collapsibleTitleSpacingFirstChild = {
  ...createNotFirstChildStyle(collapsibleTitleSpacing),
};

export const heading1Spacing = {
  paddingTop: rems(textSpacing.heading1),
};
export const heading1SpacingFirstChild = {
  ...createNotFirstChildStyle(heading1Spacing),
};

export const heading2Spacing = {
  paddingTop: rems(textSpacing.heading2),
};
export const heading2SpacingFirstChild = {
  ...createNotFirstChildStyle(heading2Spacing),
};

export const heading3Spacing = {
  paddingTop: rems(textSpacing.heading3),
};
export const heading3SpacingFirstChild = {
  ...createNotFirstChildStyle(heading3Spacing),
};

export const heading4Spacing = {
  paddingTop: rems(textSpacing.heading4),
};
export const heading4SpacingFirstChild = {
  ...createNotFirstChildStyle(heading4Spacing),
};

export const heading5Spacing = {
  paddingTop: rems(textSpacing.heading5),
};
export const heading5SpacingFirstChild = {
  ...createNotFirstChildStyle(heading5Spacing),
};

export const labelSpacing = {};
export const labelSpacingFirstChild = {
  ...createNotFirstChildStyle(labelSpacing),
};

export const linkBoxTitleSmallSpacing = {};
export const linkBoxTitleSmallSpacingFirstChild = {
  ...createNotFirstChildStyle(linkBoxTitleSmallSpacing),
};

export const listItemSubTitleSpacing = {};
export const listItemSubTitleSpacingFirstChild = {
  ...createNotFirstChildStyle(listItemSubTitleSpacing),
};

export const paragraphSpacing = {
  paddingTop: rems(textSpacing.paragraph),
};
export const paragraphSpacingFirstChild = {
  ...createNotFirstChildStyle(paragraphSpacing),
};

export const preFormattedSpacing = {
  marginTop: rems(textSpacing.preFormatted),
  marginBottom: rems(textSpacing.preFormatted),
  padding: rems(textSpacing.preFormatted),
};
export const preFormattedSpacingFirstChild = {
  ...createNotFirstChildStyle(preFormattedSpacing),
};

export const tableSpacing = {
  paddingBlock: rems(textSpacing.table),
};
export const tableSpacingFirstChild = {
  ...createNotFirstChildStyle(tableSpacing),
};

export const smallSpacing: CSSProperties = {};
export const smallSpacingFirstChild = {
  ...createNotFirstChildStyle(smallSpacing),
};

export const subTitleSpacing = {};
export const subTitleSpacingFirstChild = {
  ...createNotFirstChildStyle(subTitleSpacing),
};

export const summarySpacing = {};
export const summarySpacingFirstChild = {
  ...createNotFirstChildStyle(summarySpacing),
};
