import { Route, Slug } from "@/framework";

import { NavItem, NavItems } from "./nav-items";

export const NAV_ITEM_ROUTES_BY_SLUG: Record<Slug, Route> = Object.fromEntries(
  Object.entries(NavItems).map(([title, slug]) => [
    slug,
    { title, url: `/${slug}` },
  ]),
);

export const NAV_ITEM_ROUTES: readonly Route[] = Object.values(
  NAV_ITEM_ROUTES_BY_SLUG,
);

export function getNavItemsWithSelected(selectedNavItem?: NavItem) {
  return NAV_ITEM_ROUTES.map((navItem) => ({
    ...navItem,
    selected: selectedNavItem
      ? NAV_ITEM_ROUTES_BY_SLUG[selectedNavItem].url === navItem.url
      : false,
  }));
}
