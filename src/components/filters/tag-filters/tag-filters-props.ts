import { ContentType } from "@/framework";

import { TagFiltersTag } from "./tag-filters-tag";

export interface TagFiltersProps {
  readonly contentType: ContentType;
  readonly tagField: string;
  readonly tags: readonly TagFiltersTag[];
  readonly collapsible?: boolean;
}
