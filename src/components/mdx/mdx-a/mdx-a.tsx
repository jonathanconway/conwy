"use client";

import { Link } from "../../link";

import { MdxAFootnotePopupLink } from "./mdx-a-footnote-popup-link";
import { MdxAProps } from "./mdx-a-props";
import {
  checkIsASubformatFootnotePopupLinkProps,
  getASubformatProps,
} from "./mdx-a-subformat";
import "./mdx-a.css";

export function MdxA(props: MdxAProps) {
  props = getASubformatProps(props);

  if (checkIsASubformatFootnotePopupLinkProps(props)) {
    return <MdxAFootnotePopupLink {...props} />;
  }

  return <Link {...props} />;
}
