import { Percentage } from "./percentage";

export interface Size<T = number | Percentage> {
  readonly w: T;
  readonly h: T;
}
