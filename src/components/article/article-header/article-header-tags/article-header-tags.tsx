import * as styles from "./article-header-tags.css";

interface ArticleHeaderTags {
  readonly tags: readonly string[];
}

export function ArticleHeaderTags({ tags }: ArticleHeaderTags) {
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
