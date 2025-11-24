import { get, isArray, uniq, without } from "lodash";

import { ALL } from "./default-selected-tags";
import { TagFiltersProps } from "./tag-filters-props";

export function getItemsTags<T>(props: TagFiltersProps<T>) {
  const tagsFieldValues = props.items.map((item) => get(item, props.tagField));

  const tagsFieldValuesFlat = tagsFieldValues
    .map((value) => (isArray(value) ? value : [value]))
    .flat();

  const tagsFieldValuesString = tagsFieldValuesFlat.map((value) =>
    String(value),
  );

  const tagsFieldValuesUniq = uniq(tagsFieldValuesString);

  const tagsFieldValuesUniqWithoutAll = without(tagsFieldValuesUniq, ALL);

  return tagsFieldValuesUniqWithoutAll;
}
