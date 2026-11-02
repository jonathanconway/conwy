import * as styles from "./article-subheader-tags.css";

interface ArticleSubHeaderTags {
  readonly tags: readonly string[];
}

export function ArticleSubHeaderTags(props: ArticleSubHeaderTags) {
  const { tags } = props;

  return (
    <p className={styles.tags}>
      {tags.map((tag) => (
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </p>
  );
}
