import { HeaderLogo } from "./header-logo";
import { HeaderNav, NavItem } from "./header-nav";
import * as styles from "./header.css";

export interface HeaderProps {
  readonly selectedNavItem?: NavItem;
}

export function Header({ selectedNavItem }: HeaderProps) {
  return (
    <>
      <div className={styles.container}>
        <HeaderLogo />

        <HeaderNav selectedNavItem={selectedNavItem} />
      </div>
    </>
  );
}
