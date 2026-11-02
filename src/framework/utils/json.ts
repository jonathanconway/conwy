export function sanitizeJson(input: string) {
  return input.replace(/,(\s*[}\]])/g, "$1");
}
