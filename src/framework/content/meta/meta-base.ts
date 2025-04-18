import { Image } from "../image";

export interface MetaBase {
  readonly slug: string;
  readonly title?: string;
  readonly mainImage?: Image;
}
