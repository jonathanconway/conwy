export const NAV_ITEMS = [
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/work",
    title: "Work",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export function getNavItemsWithSelected(selectedNavPath?: string) {
  return NAV_ITEMS.map((navItem) => ({
    ...navItem,
    selected: selectedNavPath === navItem.href,
  }));
}
