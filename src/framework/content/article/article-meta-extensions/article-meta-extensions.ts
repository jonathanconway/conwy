export interface ArticleMetaExtensions {
  readonly articleHeadings: readonly ArticleHeading[];
}

export interface ArticleHeading {
  readonly id: string;
  readonly title: string;
  readonly shortTitle?: string;
}
