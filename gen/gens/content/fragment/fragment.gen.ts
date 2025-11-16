import { camelCase } from "lodash";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { fragmentContentGen } from "./fragment.content.mdx.gen";
import { fragmentIndexGen } from "./fragment.index.gen";
import {
  FragmentGenParams,
  FragmentGenTemplateParams,
} from "./fragment.params";
import { fragmentsIndexGen } from "./fragments.index.gen";

export async function fragment(params: FragmentGenParams) {
  const { name } = params;

  const fragmentsPath = `src/content/fragments`;
  const fragmentPath = `${fragmentsPath}/${name}`;

  const nameRootObject = `${camelCase(name)}Fragment`;

  const fragmentGenTemplateParams: FragmentGenTemplateParams = {
    ...params,
    nameRootObject,
  };

  folderWrite(fragmentPath);

  fileWrite(`${fragmentPath}/content.mdx`, fragmentContentGen());

  const fragmentIndexPath = `${fragmentPath}/index.ts`;
  fileWrite(fragmentIndexPath, fragmentIndexGen(fragmentGenTemplateParams));
  runPrettier(fragmentIndexPath);

  const fragmentsIndexPath = `${fragmentsPath}/index.ts`;
  fileAppendAndSortLines(
    fragmentsIndexPath,
    fragmentsIndexGen(fragmentGenTemplateParams),
  );
  runPrettier(fragmentsIndexPath);
}
