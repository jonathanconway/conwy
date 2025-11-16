export interface IdeaGenParams {
  readonly name: string;
}

export interface IdeaGenTemplateParams extends IdeaGenParams {
  readonly nameRootObject: string;

  readonly title: string;
}
