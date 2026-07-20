import { Url } from "../url";

export interface IllustrationBase<TIllustrationType extends string> {
  readonly slug: string;
  readonly type: TIllustrationType;
  readonly src: Url;
}
