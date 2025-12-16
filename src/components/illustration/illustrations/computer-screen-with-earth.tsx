import { ComputerScreen } from "./computer-screen";
import { Earth } from "./earth";

/**
 * Illustration: A computer screen displaying an Earth globe, representing global web or internet connectivity.
 */
export function ComputerScreenWithEarth() {
  return <ComputerScreen display={<Earth />} />;
}
