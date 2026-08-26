import { ChecklistItemTag, ChecklistItemTagGroup } from "@/framework/client";

export interface ChecklistFiltersProps {
  readonly tagGroups: readonly ChecklistItemTagGroup[];

  readonly selectedTags: readonly ChecklistItemTag[];
  readonly onChange: (selectedFilters: readonly ChecklistItemTag[]) => void;
}
