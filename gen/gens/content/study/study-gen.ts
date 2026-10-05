import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { studiesIndexGen } from "./studies-gen-index.template";
import { studyGenIndexTemplate } from "./study-gen-index.template";
import { studyGenSchema } from "./study-gen-schema";
import { generateStudyGenTemplateParams } from "./study-gen-template-params";

export async function study() {
  const studyGenParams = await getGenSchemaValues(studyGenSchema);
  const studyGenTemplateParams = generateStudyGenTemplateParams(studyGenParams);

  const studiesPath = `src/content/studies`;

  const studyIndexPath = `${studiesPath}/${studyGenTemplateParams.slug}.ts`;
  fileWrite(studyIndexPath, studyGenIndexTemplate(studyGenTemplateParams));
  await runPrettier(studyIndexPath);

  const studiesIndexPath = `${studiesPath}/index.ts`;
  fileAppendAndSortLines(
    studiesIndexPath,
    studiesIndexGen(studyGenTemplateParams),
  );
  await runPrettier(studiesIndexPath);
}
