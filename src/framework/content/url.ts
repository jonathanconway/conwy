export type Url = string;

export function getUrlFilename(url: Url) {
  return url.split("/").slice(-1)[0].split(".").slice(0, -1).join(".");
}

export function checkIsUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
