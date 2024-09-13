import { ItemMeta } from "@/framework/client";

interface UseItemNavParams<TMeta extends ItemMeta> {
  readonly itemMetas: readonly TMeta[];
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function useItemNav<TMeta extends ItemMeta>(
  params: UseItemNavParams<TMeta>,
) {
  const { itemMetas } = params;

  const itemMetaPrevious = getPrevious(itemMetas, params.itemMeta);
  const itemMetaNext = getNext(itemMetas, params.itemMeta);
  const itemMetasNavsPreviousNext = [
    {
      type: "previous",
      itemMeta: itemMetaPrevious,
    },
    {
      type: "next",
      itemMeta: itemMetaNext,
    },
  ] as readonly {
    readonly type: "previous" | "next";
    readonly itemMeta: TMeta;
  }[];

  return {
    itemMetasNavsPreviousNext,
  };
}

function getPrevious<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex <= 0) {
    return undefined;
  }
  return items[itemIndex - 1];
}

function getNext<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex >= items.length - 1) {
    return undefined;
  }
  return items[itemIndex + 1];
}
