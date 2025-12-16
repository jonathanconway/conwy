import { ComputerScreen } from "./computer-screen";
import { ConnectionTopRightToBottomLeft } from "./connection-top-right-to-bottom-left";
import { Earth } from "./earth";
import { Page } from "./page";
import { StickFigure } from "./stick-figure";

/**
 * Illustration: A user flow diagram showing connections between a user, page, Earth globe, and computer screen, representing a web interaction journey.
 */
export function UserFlow() {
  return (
    <ConnectionTopRightToBottomLeft
      topRight={
        <ConnectionTopRightToBottomLeft
          topRight={<StickFigure />}
          bottomLeft={<Page />}
        />
      }
      bottomLeft={
        <ConnectionTopRightToBottomLeft
          topRight={<Earth />}
          bottomLeft={<ComputerScreen />}
        />
      }
    />
  );
}
