import { camelCase } from "lodash";

import { titleCase } from "@/framework";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { ideaBlurbGen } from "./idea.blurb.mdx.gen";
import { ideaContentGen } from "./idea.content.mdx.gen";
import { ideaIndexGen } from "./idea.index.gen";
import { ideaMetaGen } from "./idea.meta.gen";
import { IdeaGenParams, IdeaGenTemplateParams } from "./idea.params";
import { ideasIndexGen } from "./ideas.index.gen";

export async function idea(params: IdeaGenParams) {
  const { name } = params;

  const ideasPath = `src/content/ideas`;
  const ideaPath = `${ideasPath}/${name}`;

  const ideaGenTemplateParams: IdeaGenTemplateParams = {
    ...params,

    title: titleCase(name),
    nameRootObject: `${camelCase(name)}Idea`,
  };

  folderWrite(ideaPath);

  fileWrite(`${ideaPath}/blurb.mdx`, ideaBlurbGen());

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
}
