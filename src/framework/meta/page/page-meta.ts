import { MetaBase } from "../meta-base";

export interface PageMeta extends MetaBase {
  readonly title: string;
  readonly type: "page";
}
