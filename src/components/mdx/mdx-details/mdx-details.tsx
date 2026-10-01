"use client";

import { HTMLProps } from "react";

import "./mdx-details.css";

export type MdxDetailsProps = HTMLProps<HTMLDetailsElement>;

export function MdxDetails(props: MdxDetailsProps) {
  return <details {...props} />;
}
