import prompts, { Choice, PromptObject } from "prompts";

import { GenSchemaFields } from "./gen-schema";
import { convertGenSchemaFieldToPromptField } from "./gen-schema-convert-to-prompt";
import { GenSchemaRoot } from "./gen-schema-root";

export async function runGenPrompts<
  TGenSchemaRoot extends GenSchemaRoot,
  TValuesSoFar extends Partial<GenSchemaRoot>,
>(genSchemaFields: GenSchemaFields<TGenSchemaRoot>, valuesSoFar: TValuesSoFar) {
  let answers: Partial<TGenSchemaRoot> = {};
  for await (const [name, genSchemaField] of Object.entries(genSchemaFields)) {
    const prompt = convertGenSchemaFieldToPromptField(name, genSchemaField, {
      ...valuesSoFar,
      ...answers,
    });

    const answer = await runGenPrompt(prompt);
    answers = { ...answers, ...answer };
  }
  return answers;
}

async function runGenPrompt(prompt: PromptObject) {
  switch (prompt.type) {
    case "text":
      return runGenPromptText(prompt);
    case "confirm":
      return runGenPromptConfirm(prompt);
    case "select":
      return runGenPromptSelect(prompt);
  }
}

async function runGenPromptText(prompt: PromptObject) {
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
