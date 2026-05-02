import { ReactNode } from "react";

import { MainAsideLayout } from "../main-aside-layout";
import { PageLayout } from "../page-layout";

export interface ArticleLayoutProps {
  readonly main: ReactNode;
  readonly aside: ReactNode;
}

export function ArticleLayout(props: ArticleLayoutProps) {
  const { main, aside } = props;

  return (
    <PageLayout
      selectedNavPath="/articles"
      main={<MainAsideLayout main={main} aside={aside} />}
    />
  );
}
