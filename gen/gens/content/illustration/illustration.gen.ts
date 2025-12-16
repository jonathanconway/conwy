import { readFile, readFileSync } from "fs";
import jscodeshift from "jscodeshift";
import { kebabCase, startCase } from "lodash";
import { join } from "path";
import { cwd } from "process";

import {
  fileAppendAndSortLines,
  fileAppendToConstObject,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { illustrationTypesSvgGen } from "./illustration-types-svg.gen";
import { illustrationTypesGen } from "./illustration-types.gen";
import { IllustrationGenParams } from "./illustration.params";
import { illustrationGen } from "./illustration_.gen";
import illustrationsIndexGen from "./illustrations.index.gen";

export async function illustration(params: IllustrationGenParams) {
  const { name } = params;

  const illustrationPath = `src/components/illustration`;
  const illustrationsPath = `${illustrationPath}/illustrations`;

  const nameComponent = startCase(kebabCase(name));
  const nameComponentProps = `${nameComponent}Props`;

  const illustrationsTypesPath = `${illustrationPath}/illustration-types.ts`;
  const illustrationsTypesSrc = readFileSync(illustrationsTypesPath).toString();

  const illustrationsTypesSvgPath = `${illustrationPath}/illustration-types-svg.ts`;
  const illustrationsTypesSvgSrc = readFileSync(
    illustrationsTypesSvgPath,
  ).toString();

  const templateParams = {
    ...params,
    nameComponent,
    nameComponentProps,
    illustrationPath,
    illustrationsTypesSrc,
    illustrationsTypesSvgSrc,
  };

  // fileWrite(
  //   `${illustrationsPath}/${name}.tsx`,
  //   illustrationFnGen(templateParams),
  // );

  const illustrationTypesGenOutput = illustrationTypesGen(templateParams);
  // fileWrite(illustrationsTypesPath, illustrationTypesGenOutput);
  // await runPrettier(illustrationsTypesPath);

  const illustrationTypesSvgGenOutput = illustrationTypesSvgGen(templateParams);
  console.log("illustrationsTypesSvgPath", illustrationsTypesSvgPath);
  console.log(illustrationTypesSvgGenOutput);
  // fileWrite(illustrationsTypesSvgPath, illustrationTypesSvgGenOutput);
  // await runPrettier(illustrationsTypesSvgPath);

  const illustrationComponentPath = `${illustrationsPath}/${name}.tsx`;
  const illustrationComponentGenOutpt = illustrationGen(templateParams);
  // fileWrite(illustrationComponentPath, illustrationComponentGenOutpt);
  // await runPrettier(illustrationComponentPath);

  // fileAppendAndSortLines(
  //   `${illustrationsPath}/index.ts`,
  //   illustrationsIndexGen(templateParams),
  // );

  //-----------------------

  // fileAppendToConstObject(
  //   `${illustrationPath}/illustration-types.ts`,
  //   "IllustrationTypes",
  //   `
  //   ${nameComponent}: "${name}",
  //   `.trim(),
  // );

  // fileAppendToConstObject(
  //   `${illustrationPath}/illustration-types-svg.ts`,
  //   "IllustrationTypes",
  //   `
  //   [IllustrationTypes.${nameComponent}]: ${nameComponent},
  //   `.trim(),
  // );
  // `${illustrationPath}/illustration-types-svg.ts`,
}
