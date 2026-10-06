import { ContentTypes } from "@/framework";
import { checkIsGenSchemaPromptsRunResultUserCancelled } from "@/framework/gen";
import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  logCommitMessageContentCreated,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { studiesIndexGen } from "./studies-gen-index.template";
import { studyGenIndexTemplate } from "./study-gen-index.template";
import { studyGenSchema } from "./study-gen-schema";
import { generateStudyGenTemplateParams } from "./study-gen-template-params";

export async function study() {
  const studyGenParams = await getGenSchemaValues(studyGenSchema);
  if (checkIsGenSchemaPromptsRunResultUserCancelled(studyGenParams)) {
    return;
  }
  const studyGenTemplateParams = generateStudyGenTemplateParams(
    studyGenParams.value,
  );

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

  logCommitMessageContentCreated(
    ContentTypes.Study,
    studyGenTemplateParams.slug,
  );
}
