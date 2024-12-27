import { Article as Article_ } from "@/framework/client";

import * as styles from "./article-summary.css";

interface ArticleSummaryProps {
  readonly article: Article_;
}

export function ArticleSummary({ article }: ArticleSummaryProps) {
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
