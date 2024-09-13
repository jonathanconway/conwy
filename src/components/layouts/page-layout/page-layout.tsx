import { ReactNode } from "react";

import { Footer } from "../../footer";
import { Header } from "../../header";

import * as styles from "./page-layout.styles";

export interface PageLayoutProps {
  readonly main: ReactNode;
  readonly selectedNavPath?: string;
}

export function PageLayout({ main, selectedNavPath }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <Header selectedNavPath={selectedNavPath} />

      <div className={styles.mainWrapper}>{main}</div>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
