import { Url } from "@/framework";

export interface CommunityGenParams {
  readonly name: string;
  readonly url: Url;
}

export interface CommunityGenTemplateParams extends CommunityGenParams {
  readonly nameRootObject: string;

  readonly title: string;
}
