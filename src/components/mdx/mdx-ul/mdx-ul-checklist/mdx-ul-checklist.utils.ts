import { isArray } from "lodash";

import { checkHasChildren } from "@/framework/client";

import { MdxUlProps } from "../mdx-ul-props";

export function checkIsChecklist(props: MdxUlProps) {
  return (
    checkHasChildren(props) &&
    isArray(props.children) &&
    props.children.find((child) => child?.props?.className === "task-list-item")
  );
}
