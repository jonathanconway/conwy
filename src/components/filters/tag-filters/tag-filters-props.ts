export interface TagFiltersProps<T> {
  readonly contentType: string;
  readonly items: readonly T[];
  readonly tagField: string;
}
