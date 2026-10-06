import { omit } from "lodash";

import { GenSchema, GenSchemaFields } from "./gen-schema";
import { convertGenSchemaToCommandOptionValues } from "./gen-schema-command-convert-to";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { runGenPrompts } from "./gen-schema-prompt-run";
import {
  checkIsGenSchemaPromptsRunResultUserCancelled,
  createGenSchemaPromptsRunResultOk,
} from "./gen-schema-prompts-run-result";
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

  const promptsAnswer = await runGenPrompts(
    genSchemaExceptCommandOptionValue,
    commandOptionValues,
  );

  if (checkIsGenSchemaPromptsRunResultUserCancelled(promptsAnswer)) {
    console.log("Generator process cancelled.");
    return promptsAnswer;
  }

  const promptsAnswerValues = promptsAnswer.value;

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

  return createGenSchemaPromptsRunResultOk(combinedValues as TGenSchemaRoot);
}
