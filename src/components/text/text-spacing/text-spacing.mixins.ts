import { CSSProperties } from "@vanilla-extract/css";

import { rems } from "@/framework/css";

import { createSpacingNotFirstChildStyle } from "../../spacing/spacing.mixins";

import * as textSpacing from "./text-spacing.consts";

export const bodySpacing = {
  paddingTop: rems(textSpacing.body),
};
export const bodySpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(bodySpacing),
};

export const collapsibleTitleSpacing = {};
export const collapsibleTitleSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(collapsibleTitleSpacing),
};

export const heading1Spacing = {
  paddingTop: rems(textSpacing.heading1),
};
export const heading1SpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(heading1Spacing),
};

export const heading2Spacing = {
  paddingTop: rems(textSpacing.heading2),
};
export const heading2SpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(heading2Spacing),
};

export const heading3Spacing = {
  paddingTop: rems(textSpacing.heading3),
};
export const heading3SpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(heading3Spacing),
};

export const heading4Spacing = {
  paddingTop: rems(textSpacing.heading4),
};
export const heading4SpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(heading4Spacing),
};

export const heading5Spacing = {
  paddingTop: rems(textSpacing.heading5),
};
export const heading5SpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(heading5Spacing),
};

export const labelSpacing = {};
export const labelSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(labelSpacing),
};

export const linkBoxTitleSmallSpacing = {};
export const linkBoxTitleSmallSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(linkBoxTitleSmallSpacing),
};

export const listItemSubTitleSpacing = {};
export const listItemSubTitleSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(listItemSubTitleSpacing),
};

export const paragraphSpacing = {
  paddingTop: rems(textSpacing.paragraph),
};
export const paragraphSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(paragraphSpacing),
};

export const preFormattedSpacing = {
  marginTop: rems(textSpacing.preFormatted),
  marginBottom: rems(textSpacing.preFormatted),
  padding: rems(textSpacing.preFormatted),
};
export const preFormattedSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(preFormattedSpacing),
};

export const tableSpacing = {
  paddingBlock: rems(textSpacing.table),
};
export const tableSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(tableSpacing),
};

export const smallSpacing: CSSProperties = {};
export const smallSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(smallSpacing),
};

export const subTitleSpacing = {};
export const subTitleSpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(subTitleSpacing),
};

export const summarySpacing = {};
export const summarySpacingFirstChild = {
  ...createSpacingNotFirstChildStyle(summarySpacing),
};
