export interface IllustrationStaticGenParams {
  readonly name: string;
  readonly primaryColor?: string;
}

export interface IllustrationStaticGenTemplateParams
  extends IllustrationStaticGenParams {
  readonly nameCamel: string;
}
