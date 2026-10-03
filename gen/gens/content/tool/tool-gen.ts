import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { toolGenIndexTemplate } from "./tool-gen-index.template";
import { toolGenMetaTemplate } from "./tool-gen-meta.template";
import { toolGenSchema } from "./tool-gen-schema";
import { generateToolGenTemplateParams } from "./tool-gen-template-params";
import { toolsIndexGen } from "./tools-gen-index.template";

export async function tool() {
  const toolGenParams = await getGenSchemaValues(toolGenSchema);
  const toolGenTemplateParams = generateToolGenTemplateParams(toolGenParams);

  const toolsPath = `src/content/tools`;
  const toolPath = `${toolsPath}/${toolGenTemplateParams.slug}`;

  folderWrite(toolPath);

  const toolMetaPath = `${toolPath}/meta.ts`;
  fileWrite(toolMetaPath, toolGenMetaTemplate(toolGenTemplateParams));
  await runPrettier(toolMetaPath);

  const toolIndexPath = `${toolPath}/index.ts`;
  fileWrite(toolIndexPath, toolGenIndexTemplate(toolGenTemplateParams));
  await runPrettier(toolIndexPath);

  const toolsIndexPath = `${toolsPath}/index.ts`;
  fileAppendAndSortLines(toolsIndexPath, toolsIndexGen(toolGenTemplateParams));
  await runPrettier(toolsIndexPath);
}
