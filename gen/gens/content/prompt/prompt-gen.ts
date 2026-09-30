import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { promptGenContentMdxTemplate } from "./prompt-gen-content-mdx.template";
import { promptGenIndexTemplate } from "./prompt-gen-index.template";
import { promptGenMetaTemplate } from "./prompt-gen-meta.template";
import { promptGenSchema } from "./prompt-gen-schema";
import { generatePromptGenTemplateParams } from "./prompt-gen-template-params";
import { promptsGenIndexTemplate } from "./prompts-gen-index.template";

export async function prompt() {
  const promptGenParams = await getGenSchemaValues(promptGenSchema);
  const promptGenTemplateParams =
    generatePromptGenTemplateParams(promptGenParams);

  const promptsPath = `src/content/prompts`;
  const promptPath = `${promptsPath}/${promptGenTemplateParams.slug}`;

  folderWrite(promptPath);

  fileWrite(
    `${promptPath}/content.mdx`,
    promptGenContentMdxTemplate(promptGenTemplateParams),
  );

  const promptIndexPath = `${promptPath}/index.tsx`;
  fileWrite(promptIndexPath, promptGenIndexTemplate(promptGenTemplateParams));
  await runPrettier(promptIndexPath);

  const promptMetaPath = `${promptPath}/meta.ts`;
  fileWrite(promptMetaPath, promptGenMetaTemplate(promptGenTemplateParams));
  await runPrettier(promptMetaPath);

  const promptsIndexPath = `${promptsPath}/index.ts`;
  fileAppendAndSortLines(
    promptsIndexPath,
    promptsGenIndexTemplate(promptGenTemplateParams),
  );
  await runPrettier(promptIndexPath);
}
