import { FiltersProps } from "./filters-props";

export function createFiltersPropsMock(): FiltersProps {
  return {
    filters: ["filter1", "filter2"],
    selectedFilters: ["filter1"],
    title: "My filters",
    onChange: () => {},
  };
}
