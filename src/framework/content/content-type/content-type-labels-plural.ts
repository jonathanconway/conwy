import pluralize from "pluralize";

import { ContentTypes } from "./content-types";

export const CONTENT_TYPE_LABELS_PLURAL = Object.fromEntries(
  Object.values(ContentTypes).map(
    (value) => [value, pluralize(value)] as const,
  ),
);
