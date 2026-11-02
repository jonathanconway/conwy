export function join(...pathParts: readonly string[]) {
  return pathParts.join("/");
}

const PATH_REGEXP = new RegExp(/^(.+)\/([^\/]+)$/);

export function checkIsPath(input: string) {
  if (!input) {
    return;
  }
  if (input.includes(" ")) {
    return false;
  }
  if (!input.includes("/")) {
    return true;
  }
  return !!input.match(PATH_REGEXP)?.[0];
}
