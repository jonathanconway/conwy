import { Url } from "@/framework";

export interface BookGenParams {
  readonly title: string;
  readonly slug: string;

  readonly authors: readonly string[];
  readonly category?: string;
  readonly url?: Url;
}
