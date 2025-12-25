export function createTagFiltersParamKey({
  contentType,
  tagField,
}: {
  readonly contentType: string;
  readonly tagField: string;
}) {
  return `${contentType}-${tagField}-tag`;
}
