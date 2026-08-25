import { isString } from "lodash";

import * as contents from "@/content";
import {
  ContentAnchor as ContentAnchor_,
  ContentAny,
  getAnchorLink,
  getContentMeta,
  sentenceCase,
} from "@/framework/client";

import { Link } from "../link";
import { TextSizes } from "../text";

interface ContentAnchorProps {
  readonly content: ContentAny;
  readonly anchor: ContentAnchor_;
}

export function ContentAnchor(props: ContentAnchorProps) {
  const { anchor, content } = props;

  const anchorContent = getContentMeta(
    contents as unknown as Record<string, ContentAny>,
    anchor.containingContentType,
    anchor.containingContentSlug,
  );

  if (
    !anchorContent ||
    !("title" in anchorContent) ||
    !isString(anchorContent.title)
  ) {
    return;
  }

  const anchorLinkHref = getAnchorLink(
    anchor.containingContentType,
    anchor.containingContentSlug,
    content.type,
    content.meta.slug,
  );

  const anchorContentType = sentenceCase(anchor.containingContentType);

  return (
    <Link href={anchorLinkHref} size={TextSizes._2xs}>
      {anchorContentType}: {anchorContent.title}
    </Link>
  );
}
