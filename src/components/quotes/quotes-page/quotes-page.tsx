import { quotesRoute } from "@/app/routes";
import {
  MdxContainer,
  QuotesList,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import { quotesFragment } from "@/content";
import { ContentAnchorLinkAndInfo, Quote } from "@/framework";

import { Page } from "../../page";

interface QuotesPageProps {
  readonly quotes: readonly Quote[];
  readonly quotesContentAnchorLinkAndInfos: Record<
    string,
    readonly ContentAnchorLinkAndInfo[]
  >;
}

export function QuotesPage(props: QuotesPageProps) {
  const { quotes, quotesContentAnchorLinkAndInfos } = props;
  return (
    <Page title={quotesRoute.title}>
      <Stack gap={1}>
        <ResponsiveMdHalf>
          <MdxContainer>{quotesFragment.content}</MdxContainer>
        </ResponsiveMdHalf>

        <QuotesList
          quotes={quotes}
          quotesContentAnchorLinkAndInfos={quotesContentAnchorLinkAndInfos}
        />
      </Stack>
    </Page>
  );
}
