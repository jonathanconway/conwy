import { isString } from "lodash";
import prompts, { Choice, PromptObject } from "prompts";

import { GenSchemaFields } from "./gen-schema";
import { convertGenSchemaFieldToPromptField } from "./gen-schema-convert-to-prompt";
import { GenSchemaField } from "./gen-schema-field";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
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

  const answer = await getGenPromptAnswer(prompt, genSchemaField);

  if (!answer?.[name] && genSchemaField.required) {
    console.log(
      `${generateSchemaFieldLabel(name, genSchemaField)} is required.`,
    );
    return await runGenPrompt(name, genSchemaField, valuesSoFar);
  }

  return answer;
}

async function getGenPromptAnswer<TGenSchemaRoot extends GenSchemaRoot>(
  prompt: PromptObject,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
): Promise<prompts.Answers<string> | undefined> {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return runGenPromptText(prompt);
    case GenSchemaFieldTypes.TextList:
      return runGenPromptList(prompt);
    case GenSchemaFieldTypes.TextMultiLine:
      return runGenPromptTextMultiLine(prompt, genSchemaField);
    case GenSchemaFieldTypes.YesNo:
      return runGenPromptConfirm(prompt);
    case GenSchemaFieldTypes.Select:
      return runGenPromptSelect(prompt);
    case GenSchemaFieldTypes.MultiSelect:
      return runGenPromptMultiSelect(prompt);
  }
}

async function runGenPromptText(prompt: PromptObject) {
  return await prompts(prompt);
}

async function runGenPromptList(prompt: PromptObject) {
  return await prompts(prompt);
}

async function runGenPromptTextMultiLine<TGenSchemaRoot extends GenSchemaRoot>(
  prompt: PromptObject,
  genSchemaField: GenSchemaField<TGenSchemaRoot>,
  prevLines = "",
  lineNumber = 1,
) {
  if (isString(prompt.message)) {
    prompt.message =
      prompt.message.split(" | Line ")[0] + ` | Line ${lineNumber}`;
  }

  const name = String(prompt.name);
  const answers = await prompts(prompt);
  const answer = answers?.[name];

  if (answer.trim() === "") {
    return {
      [name]: prevLines,
    };
  }

  return runGenPromptTextMultiLine(
    prompt,
    genSchemaField,
    `${prevLines}\n${answer}`,
    lineNumber + 1,
  );
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
  const answer = answers?.[name] as number[];
  const choices = (prompt.choices ?? []) as readonly Choice[];
  const selectedChoices = answer.map(
    (answerChoice) => choices[answerChoice].title,
  );
  return { [name]: selectedChoices };
}
