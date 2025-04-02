import { Url } from "../url";

export interface Quote {
  readonly slug: string;
  readonly text: string;
  readonly author: string;
  readonly source?: {
    readonly url: Url;
  };
}
