export interface FiltersProps {
  readonly title: string;
  readonly filters: readonly Filter[];
  readonly selectedFilters: readonly Filter[];
  readonly onChange: (selectedFilters: readonly Filter[]) => void;
}

export type Filter = string;
