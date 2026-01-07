"use client";

import { Link } from "../../link";

import { MdxAProps } from "./mdx-a-props";
import { getASubformatProps } from "./mdx-a-subformat";
import "./mdx-a.css";

export function MdxA(props: MdxAProps) {
  props = getASubformatProps(props);

  return <Link {...props} />;
}
