import { sentenceCase } from "@/framework";

import { Filter, FiltersProps } from "./filters-props";

export function createFiltersPropsMock(): FiltersProps {
  const [filter1, filter2] = [createFilter("filter1"), createFilter("filter2")];
  return {
    filters: [filter1, filter2],
    selectedFilters: [filter1],
    title: "My filters",
    onChange: () => {},
  };
}

function createFilter(name: string): Filter {
  return {
    name,
    title: sentenceCase(name),
  };
}
