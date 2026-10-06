import { isString } from "lodash";
import prompts, { Choice, PromptObject } from "prompts";

import { assert, isNotNil } from "../utils";

import { GenSchemaFields } from "./gen-schema";
import { GenSchemaField } from "./gen-schema-field";
import { generateSchemaFieldLabel } from "./gen-schema-field-label-generate";
import { GenSchemaFieldTypes } from "./gen-schema-field-type";
import { convertGenSchemaFieldToPromptField } from "./gen-schema-prompt-convert-to";
import {
  checkIsGenSchemaPromptRunResultUserCancelled,
  createGenSchemaPromptRunResultOk,
  createGenSchemaPromptRunResultUserCancelled,
} from "./gen-schema-prompt-run-result";
import { validateGenSchemaPrompt } from "./gen-schema-prompt-validate";
import {
  createGenSchemaPromptsRunResultOk,
  createGenSchemaPromptsRunResultUserCancelled,
} from "./gen-schema-prompts-run-result";
import { GenSchemaRoot } from "./gen-schema-root";

export async function runGenPrompts<TGenSchemaRoot extends GenSchemaRoot>(
  genSchemaFields: GenSchemaFields<TGenSchemaRoot>,
  valuesSoFar: Partial<TGenSchemaRoot>,
) {
  let answers: Partial<TGenSchemaRoot> = { ...valuesSoFar };
  for await (const [name, genSchemaField] of Object.entries(genSchemaFields)) {
    const promptRunResult = await runGenPrompt(name, genSchemaField, answers);
    if (checkIsGenSchemaPromptRunResultUserCancelled(promptRunResult)) {
      return createGenSchemaPromptsRunResultUserCancelled();
    }

    const { value: answer } = promptRunResult;

    answers = { ...answers, [name]: answer };
  }
  return createGenSchemaPromptsRunResultOk(answers);
}

async function runGenPrompt<TGenSchemaRoot extends GenSchemaRoot>(
  name: string,
  genSchemaField: GenSchemaField<
    TGenSchemaRoot,
    TGenSchemaRoot[keyof TGenSchemaRoot]
  >,
  valuesSoFar: Partial<TGenSchemaRoot>,
) {
  const prompt = convertGenSchemaFieldToPromptField<TGenSchemaRoot>(
    name,
    genSchemaField,
    valuesSoFar,
  );

  const answer = await getGenPromptAnswer(prompt, genSchemaField);
  assert(answer);
  if (!(name in answer)) {
    return createGenSchemaPromptRunResultUserCancelled();
  }

  const answerValue = answer?.[name];

  const validationErrors = validateGenSchemaPrompt(genSchemaField, answerValue);
  if (validationErrors.length > 0) {
    console.log(
      [
        `${generateSchemaFieldLabel(name, genSchemaField)} is not valid.`,
        ...validationErrors.map((validationError) => `- ${validationError}`),
      ].join("\n"),
    );
    return await runGenPrompt(name, genSchemaField, valuesSoFar);
  }

  if (!answerValue && genSchemaField.required) {
    console.log(
      `${generateSchemaFieldLabel(name, genSchemaField)} is required.`,
    );
    return await runGenPrompt(name, genSchemaField, valuesSoFar);
  }

  return createGenSchemaPromptRunResultOk(answerValue);
}

async function getGenPromptAnswer<TGenSchemaRoot extends GenSchemaRoot>(
  prompt: PromptObject,
  genSchemaField: GenSchemaField<
    TGenSchemaRoot,
    TGenSchemaRoot[keyof TGenSchemaRoot]
  >,
): Promise<prompts.Answers<string> | undefined> {
  switch (genSchemaField.type) {
    case GenSchemaFieldTypes.Text:
      return runGenPromptText(prompt);
    case GenSchemaFieldTypes.TextList:
      return runGenPromptTextList(prompt);
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
  return await prompts(prompt, {});
}

async function runGenPromptTextList(prompt: PromptObject) {
  const name = String(prompt.name);
  const answers = await prompts(prompt, {});
  const answer = answers?.[name];

  return {
    [name]: answer?.filter(isNotNil),
  };
}

async function runGenPromptTextMultiLine<TGenSchemaRoot extends GenSchemaRoot>(
  prompt: PromptObject,
  genSchemaField: GenSchemaField<
    TGenSchemaRoot,
    TGenSchemaRoot[keyof TGenSchemaRoot]
  >,
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

  if (answer === "") {
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
