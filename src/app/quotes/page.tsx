import {
  MdxContainer,
  PageLayout,
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
} from "@/framework/client";

import contentAnchorsMap_ from "../../../builder-out/content-anchors.json";

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
    <PageLayout
      selectedNavPath="/quotes"
      main={
        <Stack gap={1}>
          <ResponsiveMdHalf>
            <MdxContainer>{quotesFragment.content}</MdxContainer>
          </ResponsiveMdHalf>

          <QuotesList
            quotes={quotes}
            quotesContentAnchorLinkAndInfos={quotesContentAnchorLinkAndInfos}
          />
        </Stack>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - quotes`,
};
