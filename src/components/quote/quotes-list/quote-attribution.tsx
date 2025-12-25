import { Quote } from "@/framework/client";

import { Link } from "../../link";
import { Text, TextSizes, TextTypes } from "../../text";
import { formatQuoteAuthorName } from "../quote.utils";

interface QuoteAttributionProps {
  readonly quote: Quote;
}

export function QuoteAttribution(props: QuoteAttributionProps) {
  return (
    <>
      <QuoteAttributionLine1 quote={props.quote} />
      <QuoteAttributionLine2 quote={props.quote} />
    </>
  );
}

function QuoteAttributionLine1({ quote }: QuoteAttributionProps) {
  if (quote.meta.author) {
    return <QuoteAttributionAuthor quote={quote} />;
  } else {
    return (
      <Text type={TextTypes.Body}>
        – <QuoteAttributionSource quote={quote} />
      </Text>
    );
  }
}

function QuoteAttributionLine2({ quote }: QuoteAttributionProps) {
  if (quote.meta.author) {
    return <QuoteAttributionSource quote={quote} />;
  }
}

function QuoteAttributionAuthor({ quote }: QuoteAttributionProps) {
  return (
    <Text type={TextTypes.Body}>
      – {formatQuoteAuthorName(quote.meta.author ?? "")}
    </Text>
  );
}

function QuoteAttributionSource({ quote }: QuoteAttributionProps) {
  if (quote.meta.source?.url) {
    return (
      <Link href={quote.meta.source.url} target="_blank" size={TextSizes.sm}>
        {quote.meta.source.title}
      </Link>
    );
  }

  if (quote.meta.source?.title) {
    return quote.meta.source.title;
  }
}
