export interface ToolGenParams {
  readonly name: string;

  readonly title?: string;

  readonly category?: string;

  readonly url?: string;

  readonly operatingSystems: readonly string[];

  readonly description?: string;

  readonly usage?: string;

  readonly section?: string;
}

export interface ToolGenTemplateParams extends ToolGenParams {
  readonly nameRootObject: string;

  readonly date: string;

  readonly sectionEnumName: string;
}
