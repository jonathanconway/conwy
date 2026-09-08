import { checklistDownloadMdsBuilder } from "./checklists";
import { contentAnchorsBuilder } from "./content-anchors";
import { followsBuilder } from "./follows";
import { Orders } from "./orders";
import { rssFeedBuilder } from "./rss-feed";

export const builderOrders = {
  [Orders.Pre]: [contentAnchorsBuilder],
  [Orders.Post]: [followsBuilder, rssFeedBuilder, checklistDownloadMdsBuilder],
};
