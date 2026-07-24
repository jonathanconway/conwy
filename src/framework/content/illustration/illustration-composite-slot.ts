import { Illustration } from "./illustration";
import { Position } from "./position";
import { Size } from "./size";

export interface IllustrationCompositeSlot {
  readonly illustration: Illustration;
  readonly position: Position;
  readonly size?: Size;
}
