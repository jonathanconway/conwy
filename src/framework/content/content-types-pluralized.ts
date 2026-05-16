import pluralize from "pluralize";

import { ContentTypes } from "./content-types";

export const CONTENT_TYPES_PLURALIZED = Object.fromEntries(
  Object.values(ContentTypes).map(
    (value) => [value, pluralize(value)] as const,
  ),
);
