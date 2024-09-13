import { Meta } from "./meta";

export function createItemKey({ type, slug }: Meta) {
  return `${type}-${slug}`;
}
