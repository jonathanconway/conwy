import { Url } from "../url";

import { Size } from "./size";

export interface IllustrationBase<TIllustrationType extends string> {
  readonly slug: string;
  readonly type: TIllustrationType;
  readonly src: Url;

  readonly size?: Size;
}
