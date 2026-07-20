import { camelCase } from "lodash";

import { fileAppendAndSortLines, fileWrite } from "../../../../gen-utils";
import { runPrettier } from "../../../../run-prettier";

import illustrationStaticFnGen from "./illustration.fn.gen";
import { IllustrationStaticGenParams } from "./illustration.params";
import illustrationsIndexGen from "./illustrations.index.gen";

export async function illustrationStatic(params: IllustrationStaticGenParams) {
  const { name, primaryColor } = params;

  const illustrationsStaticPath = `src/content/illustrations/static`;

  const nameCamel = camelCase(name);

  const templateParams = {
    ...params,
    nameCamel,
    primaryColor,
  };

  const illustrationStaticPath = `${illustrationsStaticPath}/${name}.ts`;
  fileWrite(illustrationStaticPath, illustrationStaticFnGen(templateParams));
  runPrettier(illustrationStaticPath);

  const illustrationsStaticIndexPath = `${illustrationsStaticPath}/index.ts`;
  fileAppendAndSortLines(
    illustrationsStaticIndexPath,
    illustrationsIndexGen(templateParams),
  );

  console.log(
    `✅ Generated static illustration content file: ${illustrationStaticPath}`,
  );
}
