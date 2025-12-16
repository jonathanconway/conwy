export interface IllustrationGenParams {
  readonly name: string;
  readonly description?: string;
}

export interface IllustrationGenTemplateParams extends IllustrationGenParams {
  readonly nameComponent: string;
  readonly nameComponentProps: string;
  readonly illustrationPath: string;
  readonly illustrationsTypesSrc: string;
  readonly illustrationsTypesSvgSrc: string;
}
