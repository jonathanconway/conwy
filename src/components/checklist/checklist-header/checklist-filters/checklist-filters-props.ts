import { ChecklistTag, ChecklistTagGroup } from "@/framework/client";

export interface ChecklistFiltersProps {
  readonly tagGroups: readonly ChecklistTagGroup[];

  readonly selectedTags: readonly ChecklistTag[];
  readonly onChange: (selectedFilters: readonly ChecklistTag[]) => void;
}
