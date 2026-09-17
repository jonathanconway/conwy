import { ReactNode } from "react";

import { Footer } from "../../footer";
import { Header } from "../../header";
import { ScrollToTopLink } from "../../scroll-to-top";

import * as styles from "./page-layout.css";

export interface PageLayoutProps {
  readonly main: ReactNode;
  readonly selectedNavPath?: string;
}

export function PageLayout({ main, selectedNavPath }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <Header selectedNavPath={selectedNavPath} />

      <div className={styles.mainWrapper}>
        {main}

        <ScrollToTopLink />
      </div>

      <Footer />
    </div>
  );
}
