import { fromPairs, trim } from "lodash";

export function getSubformatAttrTokens(attrValue: string) {
  const parts = attrValue.split(",").map(trim) ?? [];
  const [body, ...tokensParts] = parts;

  const tokens = fromPairs(
    tokensParts
      .filter((token) => token.includes("="))
      .map((token) => {
        const [tokenKey, ...tokenValues] = token.split("=");
        return [tokenKey, tokenValues.slice(1).join("=")];
      }),
  );

  return {
    body,
    tokens,
  };
}
