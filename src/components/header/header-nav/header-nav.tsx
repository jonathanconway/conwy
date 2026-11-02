import { SearchButtonAndModal } from "../../search";
import { Stack, StackDirections } from "../../stack";
import { HeaderHamburger } from "../header-hamburger";

import { HeaderNavItem } from "./header-nav-item";
import * as styles from "./header-nav.css";
import { getNavItemsWithSelected } from "./nav-item-routes";
import { NavItem } from "./nav-items";

interface HeaderNavProps {
  readonly selectedNavItem?: NavItem;
}

export function HeaderNav({ selectedNavItem }: HeaderNavProps) {
  const navItems = getNavItemsWithSelected(selectedNavItem);

  return (
    <Stack direction={StackDirections.Row} gap={1.25}>
      <SearchButtonAndModal />
      <HeaderHamburger>
        <div className={styles.container}>
          {navItems.map((navItem) => (
            <HeaderNavItem key={navItem.url} {...navItem} />
          ))}
        </div>
      </HeaderHamburger>
    </Stack>
  );
}
