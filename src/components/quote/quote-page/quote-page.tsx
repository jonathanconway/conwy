import { createQuotesQuoteRoute, quotesRoute } from "@/app/routes";
import { ContentAnchorLinkAndInfo, Quote as Quote_ } from "@/framework";

import { Page } from "../../page";
import { ContentsAnchorContentLinkInfos, Quote } from "../../quote";
import { ResponsiveMdHalf } from "../../responsive";

interface QuotePageProps {
  readonly quote: Quote_;
  readonly quoteContentAnchorLinkAndInfos: readonly ContentAnchorLinkAndInfo[];
}

export function QuotePage(props: QuotePageProps) {
  const { quote, quoteContentAnchorLinkAndInfos } = props;
  const quoteRoute = createQuotesQuoteRoute(quote);

  return (
    <Page
      title={quoteRoute.title}
      breadcrumbSegments={[quotesRoute, { title: quoteRoute.title }]}
    >
      <ResponsiveMdHalf>
        <Quote
          quote={quote}
          quoteContentAnchorLinkAndInfos={quoteContentAnchorLinkAndInfos}
        />
      </ResponsiveMdHalf>
    </Page>
  );
}
