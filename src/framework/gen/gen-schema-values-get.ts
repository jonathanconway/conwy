import { omit } from "lodash";

import { runGenPrompts } from "./gen-prompt-run";
import { GenSchema, GenSchemaFields } from "./gen-schema";
import { convertGenSchemaToCommandOptionValues } from "./gen-schema-convert-to-command";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaRoot } from "./gen-schema-root";

export async function getGenSchemaValues<TGenSchemaRoot extends GenSchemaRoot>(
  genSchema: GenSchema<TGenSchemaRoot>,
) {
  const commandOptionValues = await convertGenSchemaToCommandOptionValues(
    genSchema.fields,
    genSchema.name,
  );

  const genSchemaExceptCommandOptionValue = omit(
    genSchema.fields,
    Object.keys(commandOptionValues),
  ) as GenSchemaFields<TGenSchemaRoot>;

  const promptsAnswerValues = await runGenPrompts(
    genSchemaExceptCommandOptionValue,
    commandOptionValues,
  );

  const combinedValues = {
    ...commandOptionValues,
    ...promptsAnswerValues,
  };

  console.table(
    Object.entries(combinedValues).map(([key, value]) => [
      generateSchemaFieldLabel(key, genSchema.fields[key]),
      value,
    ]),
  );

  return combinedValues as TGenSchemaRoot;
}
