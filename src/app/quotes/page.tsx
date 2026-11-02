import { QuotesPage } from "@/components";
import * as contentMap_ from "@/content";
import { site } from "@/content";
import * as quotesMap from "@/content/quotes";
import {
  ContentAnchorsMap,
  ContentMap,
  Quote,
  reduceContentsAnchorLinkAndInfos,
} from "@/framework";

import contentAnchorsMap_ from "../../../builder-out/content-anchors.json";

const contentAnchorsMap = contentAnchorsMap_ as ContentAnchorsMap;
const contentMap = contentMap_ as unknown as ContentMap;
const quotes = Object.values(quotesMap) as readonly Quote[];
const quotesContentAnchorLinkAndInfos = reduceContentsAnchorLinkAndInfos(
  quotes,
  contentMap,
  contentAnchorsMap,
);

export default function QuotesPage_() {
  return (
    <QuotesPage
      quotes={quotes}
      quotesContentAnchorLinkAndInfos={quotesContentAnchorLinkAndInfos}
    />
  );
}

export const metadata = {
  title: `${site.title} - quotes`,
};
