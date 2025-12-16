import { CircleRadiate } from "./circle-radiate";
import { StickFigureJumping } from "./stick-figure-jumping";

/**
 * Illustration: A jumping stick figure surrounded by radiating circles, representing exercise or physical activity.
 */
export function Exercise() {
  return (
    <>
      <CircleRadiate>
        <StickFigureJumping />
      </CircleRadiate>
    </>
  );
}
