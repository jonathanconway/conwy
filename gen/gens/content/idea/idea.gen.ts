import { camelCase } from "lodash";

import { ContentTypes, titleCase } from "@/framework";
import { checkIsGenSchemaPromptsRunResultUserCancelled } from "@/framework/gen";
import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
  logCommitMessageContentCreated,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { ideaGenBlurbMdxTemplate } from "./idea-gen-blurb-mdx.template";
import { ideaGenContentMdxTemplate } from "./idea-gen-content-mdx.template";
import { ideaGenIndexTemplate } from "./idea-gen-index.template";
import { ideaGenMetaTemplate } from "./idea-gen-meta.template";
import { IdeaGenParams } from "./idea-gen-params";
import { ideaGenSchema } from "./idea-gen-schema";
import { generateIdeaGenTemplateParams } from "./idea-gen-template-params";
import { ideasGenIndexTemplate } from "./ideas-gen-index.template";

export async function idea() {
  const ideaGenParams = await getGenSchemaValues(ideaGenSchema);
  if (checkIsGenSchemaPromptsRunResultUserCancelled(ideaGenParams)) {
    return;
  }
  const ideaGenTemplateParams = generateIdeaGenTemplateParams(
    ideaGenParams.value,
  );

  const { slug } = ideaGenTemplateParams;

  const ideasPath = `src/content/ideas`;
  const ideaPath = `${ideasPath}/${slug}`;

  folderWrite(ideaPath);

  fileWrite(
    `${ideaPath}/blurb.mdx`,
    ideaGenBlurbMdxTemplate(ideaGenTemplateParams),
  );

  fileWrite(
    `${ideaPath}/content.mdx`,
    ideaGenContentMdxTemplate(ideaGenTemplateParams),
  );

  const ideaIndexPath = `${ideaPath}/index.tsx`;
  fileWrite(ideaIndexPath, ideaGenIndexTemplate(ideaGenTemplateParams));
  runPrettier(ideaIndexPath);

  const ideaMetaPath = `${ideaPath}/meta.ts`;
  fileWrite(ideaMetaPath, ideaGenMetaTemplate(ideaGenTemplateParams));
  runPrettier(ideaMetaPath);

  const ideasIndexPath = `${ideasPath}/index.ts`;
  fileAppendAndSortLines(
    ideasIndexPath,
    ideasGenIndexTemplate(ideaGenTemplateParams),
  );
  runPrettier(ideasIndexPath);

  logCommitMessageContentCreated(ContentTypes.Idea, slug);
}
