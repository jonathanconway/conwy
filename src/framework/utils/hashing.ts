/**
 * Generates a deterministic hash from an input string.
 * @param input Input string
 * @author Posted by esmiralha, modified by community. See post 'Timeline' for change history. Retrieved 2026-02-18, License - CC BY-SA 4.0.
 * @link https://stackoverflow.com/a/7616484
 * @returns Hash, always the same, given the same input.
 */
export function generateHash(input: string) {
  let hash = 0;
  for (const char of input) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
}
