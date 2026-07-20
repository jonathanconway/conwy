import { camelCase } from "lodash";

import { fileAppendAndSortLines, fileWrite } from "../../../../gen-utils";
import { runPrettier } from "../../../../run-prettier";

import illustrationCompositeFnGen from "./illustration.fn.gen";
import { IllustrationCompositeGenParams } from "./illustration.params";
import illustrationsIndexGen from "./illustrations.index.gen";

export async function illustrationComposite(
  params: IllustrationCompositeGenParams,
) {
  const { name } = params;

  const illustrationsCompositePath = `src/content/illustrations/composite`;

  const nameCamel = camelCase(name);

  const templateParams = {
    ...params,
    nameCamel,
  };

  const illustrationCompositePathFilename = `${illustrationsCompositePath}/${name}.ts`;
  fileWrite(
    illustrationCompositePathFilename,
    illustrationCompositeFnGen(templateParams),
  );
  runPrettier(illustrationCompositePathFilename);

  const illustrationsCompositeIndexPath = `${illustrationsCompositePath}/index.ts`;
  fileAppendAndSortLines(
    illustrationsCompositeIndexPath,
    illustrationsIndexGen(templateParams),
  );

  console.log(
    `✅ Generated composite illustration content file: ${illustrationCompositePathFilename}`,
  );
}
