import { kebabCase } from "lodash";

import { sentenceCase } from "../utils/strings";

import { GenSchemaField } from "./gen-schema-field";
import { GenSchemaRoot } from "./gen-schema-root";

export function generateSchemaFieldLabel(
  name: string,
  genSchemaField: GenSchemaField<
    GenSchemaRoot,
    GenSchemaRoot[keyof GenSchemaRoot]
  >,
) {
  return genSchemaField.label ?? sentenceCase(kebabCase(name));
}
