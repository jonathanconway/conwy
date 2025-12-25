export interface TagFiltersProps<T> {
  readonly contentType: string;
  readonly tagField: string;
  readonly items: readonly T[];
}
