import { Article as Article_ } from "@/framework/client";

import * as styles from "./article-summary.styles";

export interface ArticleSummaryProps {
  readonly article: Article_;
}

export async function ArticleSummary({ article }: ArticleSummaryProps) {
  const { summary: Summary } = article;

  if (!Summary) {
    return null;
  }

  return (
    <div className={styles.summaryContainer}>
      <Summary />
    </div>
  );
}
