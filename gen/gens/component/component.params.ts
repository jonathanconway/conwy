export interface ComponentGenParams {
  readonly name: string;
  readonly description?: string;
}

export interface ComponentGenTemplateParams extends ComponentGenParams {
  readonly nameComponent: string;
  readonly nameComponentProps: string;
  readonly nameComponentPropsMock: string;
}
