import { Bug } from "./bug";
import { Code } from "./code";
import { ComputerScreen } from "./computer-screen";
import { GridLayout } from "./layout-grid";

/**
 * Illustration: A computer screen displaying a bug icon and code symbol in a grid layout, representing debugging or software development.
 */
export function ComputerScreenWithBugAndCode() {
  return (
    <ComputerScreen
      display={
        <GridLayout>
          <Bug /> <></> <></> <Code />
        </GridLayout>
      }
    />
  );
}
