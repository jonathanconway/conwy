import { camelCase, kebabCase } from "lodash";
import { DateTime } from "luxon";

import { ToolSections, titleCase } from "@/framework";

import {
  fileAppendAndSortLines,
  fileWrite,
  getEnumName,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { toolsIndexGen } from "./tool.index.gen";
import { ToolGenParams, ToolGenTemplateParams } from "./tool.params";
import { toolGen } from "./tool_.gen";

export async function tool(params: ToolGenParams) {
  const { name, section, operatingSystems = [] } = params;

  const toolsPath = `src/content/tools`;

  const date = DateTime.now().toFormat("yyyy-MM-dd");

  const sectionEnumName = getEnumName(
    ToolSections,
    section ? kebabCase(section.toLowerCase()) : ToolSections.Belonging,
  );

  const title = titleCase(name);

  const nameRootObject = `${camelCase(name)}Tool`;

  const toolGenTemplateParams: ToolGenTemplateParams = {
    ...params,

    title,
    nameRootObject,
    date,
    sectionEnumName,
    operatingSystems,
  };

  const toolPath = `${toolsPath}/${name}.ts`;
  fileWrite(toolPath, toolGen(toolGenTemplateParams));
  runPrettier(toolPath);

  const toolsIndexPath = `${toolsPath}/index.ts`;
  fileAppendAndSortLines(toolsIndexPath, toolsIndexGen(toolGenTemplateParams));
  runPrettier(toolsIndexPath);
}
