import { buildChecklists } from "./checklists";
import { buildFollows } from "./follows";
import { Orders } from "./orders";
import { buildRssFeed } from "./rss-feed";

export const builderOrders = {
  [Orders.Pre]: [buildChecklists],
  [Orders.Post]: [buildFollows, buildRssFeed],
};
