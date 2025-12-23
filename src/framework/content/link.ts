import { Url } from "../client";

export interface Link {
  readonly url: Url;
  readonly title?: string;
}
