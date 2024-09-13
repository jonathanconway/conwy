import { ReactNode } from "react";

import { Footer } from "../../footer";
import { Header } from "../../header";

import * as styles from "./article-layout.styles";

export interface ArticleLayoutProps {
  readonly main: ReactNode;
  readonly aside: ReactNode;
}

export function ArticleLayout({ main, aside }: ArticleLayoutProps) {
  return (
    <>
      <div className={styles.headerWrapper}>
        <Header selectedNavPath="/articles" />
      </div>

      <div className={styles.mainWrapper}>
        <div className="w-full">
          {main}

          <div className={styles.footerWrapper}>
            <Footer />
          </div>
        </div>
      </div>

      <div className={styles.asideWrapper}>{aside}</div>
    </>
  );
}
