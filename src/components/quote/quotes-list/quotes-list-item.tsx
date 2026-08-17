"use client";

import * as contents from "@/content";
import {
  Quote,
  getAnchorLink,
  getContentMeta,
  sentenceCase,
} from "@/framework/client";
import { getAnchors } from "@/framework/content/content-anchor/get-anchors";

import contentAnchors from "../../../../builder-out/content-anchors.json";
import { BlockQuotePullQuote } from "../../aside";
import { Divider } from "../../divider";
import { Link } from "../../link";
import { LinkBox } from "../../link-box";
import { Stack, StackDirections } from "../../stack";
import { Text, TextSizes, TextTypes } from "../../text";

import { QuoteAttribution } from "./quote-attribution";
import * as styles from "./quotes-list-item.css";

interface QuotesListItemProps {
  readonly quote: Quote;
}

export function QuotesListItem(props: QuotesListItemProps) {
  const { quote } = props;

  const anchors = getAnchors(contentAnchors, quote);

  return (
    <li key={quote.meta.slug} className={styles.quotesListItem}>
      <LinkBox
        className={styles.quoteLinkBox}
        href={`/quotes/${quote.meta.slug}`}
      >
        <BlockQuotePullQuote className={styles.quotePullQuote}>
          <Stack direction={StackDirections.Column} gap={0.5}>
            <Text type={TextTypes.Body}>{quote.text}</Text>

            <QuoteAttribution quote={quote} />

            {anchors.length > 0 && (
              <>
                <Divider />
                {anchors.map((anchor) => (
                  <div key={anchor.containingContentSlug}>
                    <Link
                      href={getAnchorLink(
                        anchor.containingContentType,
                        anchor.containingContentSlug,
                        "quote",
                        quote.meta.slug,
                      )}
                      size={TextSizes._2xs}
                    >
                      {sentenceCase(anchor.containingContentType)}:{" "}
                      {
                        getContentMeta(
                          contents,
                          anchor.containingContentType,
                          anchor.containingContentSlug,
                        ).title
                      }
                    </Link>
                  </div>
                ))}
              </>
            )}
          </Stack>
        </BlockQuotePullQuote>
      </LinkBox>
    </li>
  );
}
