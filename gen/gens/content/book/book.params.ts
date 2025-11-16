export interface BookGenParams {
  readonly name: string;

  readonly authors: readonly string[];

  readonly category?: string;

  readonly url?: string;
}

export interface BookGenTemplateParams extends BookGenParams {
  readonly nameRootObject: string;

  readonly title: string;

  readonly date: string;

  readonly authors: readonly string[];

  readonly url?: string;

  readonly categoryEnumName: string;
}
