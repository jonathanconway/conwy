"use client";

import { HTMLProps } from "react";

import { Aside } from "../../aside";

// import { useMdxDivCustomChecklistContext } from "../mdx-div";

type MdxAsideProps = HTMLProps<HTMLElement>;

export function MdxAside(props: MdxAsideProps) {
  // const mdxDivCustomChecklistContext = useMdxDivCustomChecklistContext();
  // if (mdxDivCustomChecklistContext) {
  //   return;
  // }

  return <Aside {...props} />;
}
