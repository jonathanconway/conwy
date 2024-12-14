import { MetaBase } from "../meta";

export interface PageMeta extends MetaBase {
  readonly title: string;
  readonly type: "page";
}
