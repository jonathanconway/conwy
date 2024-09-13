import { HeaderLogo } from "./header-logo";
import { HeaderNav } from "./header-nav";
import * as styles from "./header.styles";

export interface HeaderProps {
  readonly selectedNavPath?: string;
}

export function Header({ selectedNavPath }: HeaderProps) {
  return (
    <div className={styles.container}>
      <HeaderLogo />

      <HeaderNav selectedNavPath={selectedNavPath} />
    </div>
  );
}
