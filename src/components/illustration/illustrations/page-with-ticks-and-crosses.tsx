import { Cross } from "./cross";
import { GridLayout } from "./layout-grid";
import { Page } from "./page";
import { Tick } from "./tick";

/**
 * Illustration: A document page containing checkmarks and X marks in a grid layout, representing validation or test results.
 */
export function PageWithTicksAndCrosses() {
  return (
    <Page>
      <GridLayout>
        <Tick />, <></>, <></>, <Cross />
      </GridLayout>
    </Page>
  );
}
