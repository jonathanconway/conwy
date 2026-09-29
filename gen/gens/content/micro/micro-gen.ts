import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { microGenContentMdxTemplate } from "./micro-gen-content-mdx.template";
import { microGenIndexTemplate } from "./micro-gen-index.template";
import { microGenMetaTemplate } from "./micro-gen-meta.template";
import { microGenSchema } from "./micro-gen-schema";
import { generateMicroGenTemplateParams } from "./micro-gen-template-params";
import { microsGenIndexTemplate } from "./micros-gen-index.template";

export async function micro() {
  const microGenParams = await getGenSchemaValues(microGenSchema);
  const microGenTemplateParams = generateMicroGenTemplateParams(microGenParams);

  const microsPath = `src/content/micros`;
  const microPath = `${microsPath}/${microGenTemplateParams.slug}`;

  folderWrite(microPath);

  fileWrite(
    `${microPath}/content.mdx`,
    microGenContentMdxTemplate(microGenTemplateParams),
  );

  const microIndexPath = `${microPath}/index.tsx`;
  fileWrite(microIndexPath, microGenIndexTemplate(microGenTemplateParams));
  await runPrettier(microIndexPath);

  const microMetaPath = `${microPath}/meta.ts`;
  fileWrite(microMetaPath, microGenMetaTemplate(microGenTemplateParams));
  await runPrettier(microMetaPath);

  const microsIndexPath = `${microsPath}/index.ts`;
  fileAppendAndSortLines(
    microsIndexPath,
    microsGenIndexTemplate(microGenTemplateParams),
  );
  await runPrettier(microIndexPath);
}
