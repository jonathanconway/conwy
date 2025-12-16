import { Circle } from "./circle";
import { Cross } from "./cross";
import { KeyboardKey } from "./keyboard-key";
import { GridLayout } from "./layout-grid";
import { Person } from "./person";

/**
 * Illustration: Three keyboard keys arranged in a grid, each containing different icons (circle, person, cross).
 */
export function KeyboardShortcuts() {
  return (
    <GridLayout>
      <KeyboardKey>
        <Circle />
      </KeyboardKey>

      <KeyboardKey>
        <Person />
      </KeyboardKey>

      <KeyboardKey>
        <Cross />
      </KeyboardKey>
    </GridLayout>
  );
}
