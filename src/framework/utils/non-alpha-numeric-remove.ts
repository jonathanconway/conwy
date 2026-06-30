// Source - https://stackoverflow.com/a/70931147
// Posted by Ledorub, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-22, License - CC BY-SA 4.0

export function removeNonAlphaNumeric(input: string) {
  return input.replace(/[^\p{L}\d]/gu, "");
}
