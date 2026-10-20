"use client";

import { HTMLProps } from "react";

import { Text, TextProps, TextTypes } from "../../text";

export type MdxSummaryProps = Exclude<HTMLProps<HTMLElement>, TextProps> &
  TextProps;

export function MdxSummary(props: MdxSummaryProps) {
  return <Text type={TextTypes.Summary} {...props} />;
}
