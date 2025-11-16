export interface ArticleGenParams {
  readonly name: string;
}

export interface ArticleGenTemplateParams extends ArticleGenParams {
  readonly nameRootObject: string;

  readonly title: string;

  readonly date: string;
}
