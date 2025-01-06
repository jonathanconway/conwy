import { get, isArray, uniq } from "lodash";

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

  return tagsFieldValuesUniq;
}
