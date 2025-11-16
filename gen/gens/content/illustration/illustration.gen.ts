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

import illustrationTypesSvgGen from "./illustration-types-svg.gen";
import illustrationTypesGen from "./illustration-types.gen";
import illustrationFnGen from "./illustration.fn.gen";
import { IllustrationGenParams } from "./illustration.params";
import illustrationsIndexGen from "./illustrations.index.gen";

export async function illustration(params: IllustrationGenParams) {
  const { name } = params;

  const illustrationPath = `src/components/illustration`;
  const illustrationsPath = `${illustrationPath}/illustrations`;

  const nameComponent = startCase(kebabCase(name));
  const nameComponentProps = `${nameComponent}Props`;

  const illustrationsTypesPath = `${illustrationPath}/illustration-types.ts`;
  const illustrationsTypesSrc = readFileSync(illustrationsTypesPath).toString();

  const templateParams = {
    ...params,
    nameComponent,
    nameComponentProps,
    illustrationPath,
    illustrationsTypesSrc,
  };

  // fileWrite(
  //   `${illustrationsPath}/${name}.tsx`,
  //   illustrationFnGen(templateParams),
  // );

  // fileAppendAndSortLines(
  //   `${illustrationsPath}/index.ts`,
  //   illustrationsIndexGen(templateParams),
  // );

  illustrationTypesGen(templateParams);
  // fileWrite(illustrationsTypesPath, illustrationTypesGen(templateParams));
  // runPrettier(illustrationsTypesPath);

  // fileWrite(illustrationsTypesPath, illustrationTypesSvgGen(templateParams));
  // runPrettier(illustrationsTypesPath);

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
