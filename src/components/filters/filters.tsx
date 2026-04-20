"use client";

import { Checkbox } from "../checkbox";
import { CheckboxBaseColors } from "../checkbox";

import { FiltersProps } from "./filters-props";
import * as styles from "./filters.css";

export function Filters(props: FiltersProps) {
  function handleChange(filter: string) {
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
            key={filter}
            checked={isSelected}
            baseColor={CheckboxBaseColors.Purple}
            label={filter}
            onChange={handleChange(filter)}
          />
        );
      })}
    </div>
  );
}
