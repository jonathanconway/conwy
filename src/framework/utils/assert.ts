import { isNil } from "lodash";

export class AssertionViolationError extends Error {
  override name = "AssertionViolation";

  constructor(message?: string) {
    super(
      [
        "An asserted condition unexpectedly evaluated to false",
        isNil(message) ? undefined : `: ${message}`,
      ]
        .filter(Boolean)
        .join(""),
    );
  }
}

export function assert(
  condition: unknown,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new AssertionViolationError(message);
  }
}
