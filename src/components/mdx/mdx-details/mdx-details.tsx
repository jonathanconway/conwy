"use client";

import { HTMLProps } from "react";

export type MdxDetailsProps = HTMLProps<HTMLDetailsElement>;

export function MdxDetails(props: MdxDetailsProps) {
  return <details {...props} />;
}
