import { SearchButtonAndModal } from "../../search";
import { Stack, StackDirections } from "../../stack";
import { HeaderHamburger } from "../header-hamburger";

import { HeaderNavItem } from "./header-nav-item";
import * as styles from "./header-nav.css";
import { getNavItemsWithSelected } from "./nav-items";

interface HeaderNavProps {
  readonly selectedNavPath?: string;
}

export function HeaderNav({ selectedNavPath }: HeaderNavProps) {
  const navItems = getNavItemsWithSelected(selectedNavPath);

  return (
    <Stack direction={StackDirections.Row} gap={1.25}>
      <SearchButtonAndModal />
      <HeaderHamburger>
        <div className={styles.container}>
          {navItems.map((navItem) => (
            <HeaderNavItem key={navItem.href} {...navItem} />
          ))}
        </div>
      </HeaderHamburger>
    </Stack>
  );
}
