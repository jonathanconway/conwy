import prompts, { Choice, PromptObject } from "prompts";

import { GenSchemaFields } from "./gen-schema";
import { convertGenSchemaFieldToPromptField } from "./gen-schema-convert-to-prompt";
import { GenSchemaField } from "./gen-schema-field";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaRoot } from "./gen-schema-root";

export async function runGenPrompts<TGenSchemaRoot extends GenSchemaRoot>(
  genSchemaFields: GenSchemaFields<TGenSchemaRoot>,
  valuesSoFar: TGenSchemaRoot,
) {
  let answers: Partial<TGenSchemaRoot> = { ...valuesSoFar };
  for await (const [name, genSchemaField] of Object.entries(genSchemaFields)) {
    const answer = await runGenPrompt(name, genSchemaField, answers);
    answers = { ...answers, ...answer };
  }
  return answers;
}

async function runGenPrompt<TGenSchemaRoot extends GenSchemaRoot>(
  name: string,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  valuesSoFar: TGenSchemaRoot,
) {
  const prompt = convertGenSchemaFieldToPromptField<TGenSchemaRoot>(
    name,
    genSchemaField,
    valuesSoFar,
  );

  const answer = await getGenPromptAnswer(prompt);

  if (!answer?.[name] && genSchemaField.required) {
    console.log(
      `${generateSchemaFieldLabel(name, genSchemaField)} is required.`,
    );
    return await runGenPrompt(name, genSchemaField, valuesSoFar);
  }

  return answer;
}

async function getGenPromptAnswer(
  prompt: PromptObject,
): Promise<prompts.Answers<string> | undefined> {
  switch (prompt.type) {
    case "text":
      return runGenPromptText(prompt);
    case "list":
      return runGenPromptList(prompt);
    case "confirm":
      return runGenPromptConfirm(prompt);
    case "select":
      return runGenPromptSelect(prompt);
    case "multiselect":
      return runGenPromptMultiSelect(prompt);
  }
}

async function runGenPromptText(prompt: PromptObject) {
  return await prompts(prompt);
}

async function runGenPromptList(prompt: PromptObject) {
  return await prompts(prompt);
}

async function runGenPromptConfirm(prompt: PromptObject) {
  return await prompts(prompt);
}

async function runGenPromptSelect(prompt: PromptObject) {
  const answers = await prompts(prompt);
  const name = String(prompt.name);
  const answer = answers?.[name] as number;
  const choices = (prompt.choices ?? []) as readonly Choice[];
  const choice = choices[answer].title;
  return { [name]: choice };
}

async function runGenPromptMultiSelect(prompt: PromptObject) {
  const answers = await prompts(prompt);
  const name = String(prompt.name);
  const answer = answers?.[name] as number;
  const choices = (prompt.choices ?? []) as readonly Choice[];
  const choice = choices[answer].title;
  return { [name]: choice };
}
