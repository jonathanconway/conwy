import {
  MdxContainer,
  Page,
  QuotesList,
  ResponsiveMdHalf,
  Stack,
} from "@/components";
import * as contentMap_ from "@/content";
import { quotesFragment, site } from "@/content";
import * as quotesMap from "@/content/quotes";
import {
  ContentAnchorsMap,
  ContentMap,
  Quote,
  reduceContentsAnchorLinkAndInfos,
} from "@/framework";

import contentAnchorsMap_ from "../../../builder-out/content-anchors.json";
import { quotesRoute } from "../routes";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const quotes = Object.values(quotesMap) as readonly Quote[];
const quotesContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  quotes,
  contentMap,
  contentAnchorsMap,
);

export default function QuotesPage() {
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

export const metadata = {
  title: `${site.title} - quotes`,
};
