import {
  CONTENT_TYPE_LABELS,
  ContentAnchor as ContentAnchor_,
  ContentLinkAndInfo,
  getContentAnchorLink,
} from "@/framework/client";

import { Link } from "../link";
import { TextSizes } from "../text";

interface ContentAnchorProps {
  readonly anchor: ContentAnchor_;
  readonly anchorContentLinkInfo: ContentLinkAndInfo;
}

export function ContentAnchor(props: ContentAnchorProps) {
  const {
    anchor: { anchorContentLink, containingContentLink },
    anchorContentLinkInfo,
  } = props;

  if (!anchorContentLinkInfo?.title) {
    return;
  }

  const { title } = anchorContentLinkInfo;

  const anchorLinkHref = getContentAnchorLink({
    anchorContentLink,
    containingContentLink,
  });

  const anchorContentTypeLabel = CONTENT_TYPE_LABELS[anchorContentLink.type];

  return (
    <Link href={anchorLinkHref} size={TextSizes._2xs}>
      {anchorContentTypeLabel}: {title}
    </Link>
  );
}
