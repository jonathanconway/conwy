"use client";

import { HTMLProps } from "react";

import { Aside } from "../../aside";
import { useChecklistContext } from "../../checklist/checklist-context";

type MdxAsideProps = HTMLProps<HTMLElement>;

export function MdxAside(props: MdxAsideProps) {
  const checklistContext = useChecklistContext();
  if (checklistContext) {
    return;
  }

  return <Aside {...props} />;
}
