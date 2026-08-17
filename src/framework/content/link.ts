import { Url } from "../content/url";

export interface Link {
  readonly url: Url;
  readonly title?: string;
}
