"use client";

import { Link } from "../../link";

import { MdxAPopupNoteLink } from "./mdx-a-popup-note-link";
import { MdxAProps } from "./mdx-a-props";
import {
  checkIsASubformatPopupNoteLinkProps,
  getASubformatProps,
} from "./mdx-a-subformat";
import "./mdx-a.css";

export function MdxA(props: MdxAProps) {
  props = getASubformatProps(props);
  if (checkIsASubformatPopupNoteLinkProps(props)) {
    return <MdxAPopupNoteLink {...props} />;
  }

  return <Link {...props} />;
}
