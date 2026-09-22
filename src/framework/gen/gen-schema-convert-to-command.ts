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
    convertGenSchemaFieldToCommandField,
  );
  for (const option of options.filter(isNotNil)) {
    command = command.addOption(option);
  }
  return command;
}

export function convertGenSchemaFieldToCommandField<
  TGenSchemaRoot extends GenSchemaRoot,
>([name, genSchemaField]: GenSchemaFieldEntry<
  TGenSchemaRoot,
  TGenSchemaRoot[keyof TGenSchemaRoot]
  // TGenSchemaField
>) {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return convertGenSchemaFieldToCommandFieldText([name, genSchemaField]);
    case GenSchemaFieldTypes.YesNo:
      return convertGenSchemaFieldToCommandFieldYesNo([name, genSchemaField]);
    case GenSchemaFieldTypes.Select:
      return convertGenSchemaFieldToCommandFieldSelect([name, genSchemaField]);
    case GenSchemaFieldTypes.MultiSelect:
      return convertGenSchemaFieldToCommandFieldMultiSelect([
        name,
        genSchemaField,
      ]);
  }
}

type GenSchemaFieldEntry<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaField<TGenSchemaRoot>,
> = [string, TGenSchemaField];

export function convertGenSchemaFieldToCommandFieldText<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldText<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldText<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return new Option(`--${kebabCase(name)} <${name}>`, genSchema.label);
}

export function convertGenSchemaFieldToCommandFieldYesNo<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldYesNo<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldYesNo<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return new Option(`--${kebabCase(name)}`, genSchema.label);
}

export function convertGenSchemaFieldToCommandFieldSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldSelect<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldSelect<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return new Option(`--${kebabCase(name)} <${name}>`, genSchema.label).choices(
    genSchema.options,
  );
}

export function convertGenSchemaFieldToCommandFieldMultiSelect<
  TGenSchemaRoot extends GenSchemaRoot,
  TGenSchemaField extends GenSchemaFieldMultiSelect<TGenSchemaRoot>,
>([name, genSchema]: GenSchemaFieldEntry<
  GenSchemaFieldMultiSelect<TGenSchemaRoot>,
  TGenSchemaField
>) {
  return new Option(`--${kebabCase(name)} <${name}>`, genSchema.label).choices(
    genSchema.options,
  );
}
