import { ChangeEvent } from "react";

import { Checkbox } from "../../checkbox";
import { Group } from "../../group";

import { FilterGroupProps } from "./filter-group-props";

export function FilterGroup(props: FilterGroupProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    if (checked) {
      props.onChange(props.filters);
    } else {
      props.onChange([]);
    }
  }

  return (
    <Group
      title={
        <Checkbox
          label={props.title}
          title={`Select all items in ${props.title}`}
          onChange={handleChange}
          checked={props.selectedFilters.length === props.filters.length}
        />
      }
    >
      <div>{props.children}</div>
    </Group>
  );
}
