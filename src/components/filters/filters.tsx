"use client";

import { Checkbox } from "../checkbox";
import { CheckboxBaseColors } from "../checkbox";

import { Filter, FiltersProps } from "./filters-props";
import * as styles from "./filters.css";

export function Filters(props: FiltersProps) {
  function handleChange(filter: Filter) {
    return () => {
      const newSelectedFilters = props.selectedFilters.includes(filter)
        ? props.selectedFilters.filter((f) => f !== filter)
        : [...props.selectedFilters, filter];

      props.onChange(newSelectedFilters);
    };
  }

  return (
    <div className={styles.container} aria-description={props.title}>
      {props.filters.map((filter) => {
        const isSelected = props.selectedFilters.includes(filter);

        return (
          <Checkbox
            key={filter.name}
            checked={isSelected}
            baseColor={CheckboxBaseColors.Purple}
            label={filter.title}
            onChange={handleChange(filter)}
          />
        );
      })}
    </div>
  );
}
