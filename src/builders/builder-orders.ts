import { checklistDownloadMdsBuilder } from "./checklists";
import { contentAnchorsBuilder } from "./content-anchors";
import { followsBuilder } from "./follows";
import { Orders } from "./orders";
import { rssFeedBuilder } from "./rss-feed";
import { searchIndexerBuilder } from "./search-indexer";

export const builderOrders = {
  [Orders.Pre]: [contentAnchorsBuilder, searchIndexerBuilder],
  [Orders.Post]: [followsBuilder, rssFeedBuilder, checklistDownloadMdsBuilder],
};
