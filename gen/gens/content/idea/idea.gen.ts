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

import { IdeaGenParams } from "./idea-gen-params";
import { ideaGenSchema } from "./idea-gen-schema";
import { generateIdeaGenTemplateParams } from "./idea-gen-template-params";
import { ideaBlurbGen } from "./idea.blurb.mdx.gen";
import { ideaContentGen } from "./idea.content.mdx.gen";
import { ideaIndexGen } from "./idea.index.gen";
import { ideaMetaGen } from "./idea.meta.gen";
import { ideasIndexGen } from "./ideas.index.gen";

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

  fileWrite(`${ideaPath}/blurb.mdx`, ideaBlurbGen(ideaGenTemplateParams));

  fileWrite(`${ideaPath}/content.mdx`, ideaContentGen(ideaGenTemplateParams));

  const ideaIndexPath = `${ideaPath}/index.tsx`;
  fileWrite(ideaIndexPath, ideaIndexGen(ideaGenTemplateParams));
  runPrettier(ideaIndexPath);

  const ideaMetaPath = `${ideaPath}/meta.ts`;
  fileWrite(ideaMetaPath, ideaMetaGen(ideaGenTemplateParams));
  runPrettier(ideaMetaPath);

  const ideasIndexPath = `${ideasPath}/index.ts`;
  fileAppendAndSortLines(ideasIndexPath, ideasIndexGen(ideaGenTemplateParams));
  runPrettier(ideasIndexPath);

  logCommitMessageContentCreated(ContentTypes.Idea, slug);
}
