import { buildChecklistDownloadMds } from "./checklists";
import { buildFollows } from "./follows";
import { Orders } from "./orders";
import { buildRssFeed } from "./rss-feed";

export const builderOrders = {
  [Orders.Pre]: [],
  [Orders.Post]: [buildFollows, buildRssFeed, buildChecklistDownloadMds],
};
