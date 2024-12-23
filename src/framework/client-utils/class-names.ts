/**
 * Very simple built-in string concatenator for class names.
 *
 * For more advanced use cases, you might prefer a dedicated library such as tailwind-merge (https://github.com/dcastil/tailwind-merge).
 *
 * @param values Tailwind classes as strings or string-able objects.
 * @returns
 */
export function classNames(
  ...values: readonly (string | object | undefined)[]
) {
  return values.filter(Boolean).join(" ");
}

/**
 * Very simple built-in string concatenator for class names.
 *
 * For more advanced use cases, you might prefer a dedicated library such as tailwind-merge (https://github.com/dcastil/tailwind-merge).
 *
 * @param values Tailwind classes as strings or string-able objects.
 * @returns
 */
export function cn(...values: readonly (string | object | undefined)[]) {
  return classNames(...values);
}
