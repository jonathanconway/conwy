import { HeaderHamburger } from "../header-hamburger";

import { HeaderNavItem } from "./header-nav-item";
import * as styles from "./header-nav.styles";
import { getNavItemsWithSelected } from "./nav-items";

interface HeaderNavProps {
  readonly selectedNavPath?: string;
}

export function HeaderNav({ selectedNavPath }: HeaderNavProps) {
  const navItems = getNavItemsWithSelected(selectedNavPath);

  return (
    <HeaderHamburger>
      <div className={styles.container}>
        {navItems.map((navItem) => (
          <HeaderNavItem key={navItem.href} {...navItem} />
        ))}
      </div>
    </HeaderHamburger>
  );
}
