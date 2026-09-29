import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { fragmentGenContentMdxTemplate } from "./fragment-gen-content-mdx.template";
import { fragmentGenSchema } from "./fragment-gen-schema";
import { generateFragmentGenTemplateParams } from "./fragment-gen-template-params";
import { fragmentGenIndexTemplate } from "./fragment.index.gen";
import { fragmentsGenIndexTemplate } from "./fragments-gen-index.template";

export async function fragment() {
  const fragmentGenParams = await getGenSchemaValues(fragmentGenSchema);
  const fragmentGenTemplateParams =
    generateFragmentGenTemplateParams(fragmentGenParams);

  const { slug } = fragmentGenTemplateParams;

  const fragmentsPath = `src/content/fragments`;
  const fragmentPath = `${fragmentsPath}/${slug}`;

  folderWrite(fragmentPath);

  fileWrite(
    `${fragmentPath}/content.mdx`,
    fragmentGenContentMdxTemplate(fragmentGenTemplateParams),
  );

  const fragmentIndexPath = `${fragmentPath}/index.tsx`;
  fileWrite(
    fragmentIndexPath,
    fragmentGenIndexTemplate(fragmentGenTemplateParams),
  );
  await runPrettier(fragmentIndexPath);

  const fragmentsIndexPath = `${fragmentsPath}/index.ts`;
  fileAppendAndSortLines(
    fragmentsIndexPath,
    fragmentsGenIndexTemplate(fragmentGenTemplateParams),
  );
  await runPrettier(fragmentsIndexPath);
}
