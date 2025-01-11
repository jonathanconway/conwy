import { Image } from "../image";

export interface MetaBase {
  readonly slug: string;
  readonly mainImage?: Image;
}
