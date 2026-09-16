import { isString } from "lodash";

import * as contents from "@/content";
import {
  CONTENT_TYPE_LABELS,
  Content,
  ContentAnchor as ContentAnchor_,
  ContentAny,
  ContentType,
  MetaBase,
  getContentAnchorLink,
} from "@/framework/client";
import { findImportedContent } from "@/framework/content/content-import/content-find-imported";

import { Link } from "../link";
import { TextSizes } from "../text";

interface ContentAnchorProps {
  readonly content: ContentAny;
  readonly anchor: ContentAnchor_;
}

export function ContentAnchor(props: ContentAnchorProps) {
  const { anchor } = props;

  const {
    containingContentLink: { type, slug },
  } = anchor;

  const anchorContent = findImportedContent(
    contents as unknown as Record<ContentType, Content<ContentType, MetaBase>>,
    type,
    slug,
  );

  if (
    !anchorContent ||
    !("title" in anchorContent) ||
    !isString(anchorContent.title)
  ) {
    return;
  }

  const anchorLinkHref = getContentAnchorLink(anchor);

  const anchorContentTypeLabel =
    CONTENT_TYPE_LABELS[anchor.anchorContentLink.type];

  return (
    <Link href={anchorLinkHref} size={TextSizes._2xs}>
      {anchorContentTypeLabel}: {anchorContent.title}
    </Link>
  );
}
