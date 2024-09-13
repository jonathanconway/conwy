import { Meta } from "../meta";

export interface Item<T extends Meta> {
  readonly meta: T;
}
