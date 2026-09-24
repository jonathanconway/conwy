import { Command, Option, program } from "commander";
import { kebabCase } from "lodash";

import { isNotNil } from "../utils";

import { GenSchemaFields } from "./gen-schema";
import {
  GenSchemaField,
  GenSchemaFieldMultiSelect,
  GenSchemaFieldSelect,
  GenSchemaFieldText,
  GenSchemaFieldYesNo,
} from "./gen-schema-field";
import { generateSchemaFieldHint } from "./gen-schema-field-hint-generate";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
import { GenSchemaRoot } from "./gen-schema-root";

export async function convertGenSchemaToCommandOptionValues<
  T extends GenSchemaRoot,
>(
  genSchema: GenSchemaFields<T>,
  commandName: string,
  args = process.argv.slice(1),
): Promise<Partial<T>> {
  const command = program.command(commandName);
  const commandWithOptions = convertGenSchemaFieldsToCommandWithOptions(
    genSchema,
    command,
  );

  let optionValues: Partial<T> = {};
  commandWithOptions.action(function (_, args) {
    optionValues = args._optionValues;
  });

  commandWithOptions.parse(args);

  return optionValues;
}

export function convertGenSchemaFieldsToCommandWithOptions<
  T extends GenSchemaRoot,
>(genSchema: GenSchemaFields<T>, command: Command): Command {
  const options = Object.entries(genSchema).map(
    convertGenSchemaFieldToCommandOption,
  );
  for (const option of options.filter(isNotNil)) {
    command = command.addOption(option);
  }
  return command;
}

export function convertGenSchemaFieldToCommandOption<
  TGenSchemaRoot extends GenSchemaRoot,
>([name, genSchemaField]: GenSchemaFieldEntry<
  TGenSchemaRoot,
  TGenSchemaRoot[keyof TGenSchemaRoot]
>) {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return convertGenSchemaFieldToCommandOptionText([name, genSchemaField]);
    case GenSchemaFieldTypes.TextList:
      return convertGenSchemaFieldToCommandOptionTextList([
        name,
        genSchemaField,
      ]);
    case GenSchemaFieldTypes.YesNo:
      return convertGenSchemaFieldToCommandOptionYesNo([name, genSchemaField]);
    case GenSchemaFieldTypes.Select:
      return convertGenSchemaFieldToCommandOptionSelect([name, genSchemaField]);
    case GenSchemaFieldTypes.MultiSelect:
      return convertGenSchemaFieldToCommandOptionMultiSelect([
        name,
        genSchemaField,
      ]);
  }
}

type GenSchemaFieldEntry<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaField<TGenSchemaRoot>,
> = [string, TGenSchemaField];

function convertGenSchemaFieldToCommandOptionBase<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaField<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldText<TGenSchemaRoot>,
  TGenSchemaField
>) {
  const label = generateSchemaFieldLabel(name, genSchema);
  const hint = generateSchemaFieldHint(genSchema);
  const description = [label, hint].filter(isNotNil).join("\n");
  const flags = `--${kebabCase(name)} <${name}>`;
  const option = new Option(flags, description);
  option.required = genSchema.required ?? false;
  return option;
}

export function convertGenSchemaFieldToCommandOptionText<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldText<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldText<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return convertGenSchemaFieldToCommandOptionBase([name, genSchema]);
}

export function convertGenSchemaFieldToCommandOptionTextList<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldText<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldText<TGenSchemaRoot>,
  TGenSchemaField
>) {
  // todo: make sure it works with multiple swithces or comma delimited
  return convertGenSchemaFieldToCommandOptionBase([name, genSchema]);
}

export function convertGenSchemaFieldToCommandOptionYesNo<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldYesNo<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldYesNo<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return convertGenSchemaFieldToCommandOptionBase([name, genSchema]);
}

export function convertGenSchemaFieldToCommandOptionSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldSelect<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldSelect<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return convertGenSchemaFieldToCommandOptionBase([name, genSchema]).choices(
    genSchema.options,
  );
}

export function convertGenSchemaFieldToCommandOptionMultiSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldMultiSelect<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldMultiSelect<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return convertGenSchemaFieldToCommandOptionBase([name, genSchema]).choices(
    genSchema.options,
  );
}
