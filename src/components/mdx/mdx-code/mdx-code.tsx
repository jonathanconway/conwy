"use client";

import { DetailedHTMLProps, HTMLAttributes } from "react";

import { Code } from "../../code";

type MdxCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function MdxCode(props: MdxCodeProps) {
  return <Code {...props} />;
}
