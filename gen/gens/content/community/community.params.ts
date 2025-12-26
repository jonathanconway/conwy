export interface CommunityGenParams {
  readonly name: string;
  readonly url: string;
}

export interface CommunityGenTemplateParams extends CommunityGenParams {
  readonly nameRootObject: string;

  readonly title: string;
}
