import { ContentLink } from "./content-link";

export function createContentLinkKey({ type, slug }: ContentLink) {
  return [type, slug].join("--");
}
