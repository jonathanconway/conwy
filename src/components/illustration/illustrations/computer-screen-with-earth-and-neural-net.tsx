import { ComputerScreen } from "./computer-screen";
import { ConnectionTopRightToBottomLeft } from "./connection-top-right-to-bottom-left";
import { Earth } from "./earth";
import { NeuralNet } from "./neural-net";

/**
 * Illustration: A computer screen showing Earth connected by a dashed line to a neural network diagram, representing AI or global connectivity.
 */
export function ComputerScreenWithEarthAndNeuralNet() {
  return (
    <ConnectionTopRightToBottomLeft
      topRight={<ComputerScreen display={<Earth />} />}
      bottomLeft={<NeuralNet />}
    />
  );
}
