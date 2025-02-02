import { fromPairs } from "lodash";

function convertSearchParamsToObject(searchParams: URLSearchParams) {
  return fromPairs(Array.from(searchParams.entries()));
}

function getSearchParamsFromUrlString(urlString: string) {
  if (
    !["http", "https", "file", "mailto:"].find((prefix) =>
      urlString.startsWith(`${prefix}:`),
    )
  ) {
    urlString = `http://${urlString}`;
  }

  return new URL(urlString);
}

export function getSubformatUrlTokens(attrValue: string) {
  const url = getSearchParamsFromUrlString(attrValue);
  const [body] = attrValue.split("?");
  const tokens = convertSearchParamsToObject(url.searchParams);

  return { body, tokens };
}
