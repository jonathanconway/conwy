import { isString } from "lodash";

import * as contents from "@/content";
import {
  ContentAnchor,
  ContentAny,
  Quote,
  getAnchorLink,
  getAnchors,
  getContentMeta,
  sentenceCase,
} from "@/framework/client";

import contentAnchors from "../../../../builder-out/content-anchors.json";
import { Divider } from "../../divider";
import { Link } from "../../link";
import { TextSizes } from "../../text";

interface QuoteAnchorsProps {
  readonly quote: Quote;
}

export function QuoteAnchors(props: QuoteAnchorsProps) {
  const { quote } = props;
  const anchors = getAnchors(contentAnchors, quote);

  if (anchors.length === 0) {
    return;
  }

  return (
    <>
      <Divider />

      {anchors.map((anchor) => (
        <div key={anchor.containingContentSlug}>
          <QuoteAnchor quote={quote} anchor={anchor} />
        </div>
      ))}
    </>
  );
}

interface QuoteAnchorProps {
  readonly quote: Quote;
  readonly anchor: ContentAnchor;
}

export function QuoteAnchor(props: QuoteAnchorProps) {
  const { anchor, quote } = props;

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
    "quote",
    quote.meta.slug,
  );

  const anchorContentType = sentenceCase(anchor.containingContentType);

  return (
    <Link href={anchorLinkHref} size={TextSizes._2xs}>
      {anchorContentType}: {anchorContent.title}
    </Link>
  );
}
