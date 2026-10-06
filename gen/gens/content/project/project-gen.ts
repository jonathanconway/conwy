import { ContentTypes } from "@/framework";
import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
  logCommitMessageContentCreated,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { projectGenContentMdxTemplate } from "./project-gen-content-mdx.template";
import { projectGenIndexTemplate } from "./project-gen-index.template";
import { projectGenMetaTemplate } from "./project-gen-meta.template";
import { projectGenSchema } from "./project-gen-schema";
import { generateProjectGenTemplateParams } from "./project-gen-template-params";
import { projectsIndexGen } from "./projects-gen-index.template";

export async function project() {
  const projectGenParams = await getGenSchemaValues(projectGenSchema);
  const projectGenTemplateParams =
    generateProjectGenTemplateParams(projectGenParams);
  const projectSlug = projectGenTemplateParams.slug;

  const projectsPath = `src/content/projects`;
  const projectPath = `${projectsPath}/${projectSlug}`;

  folderWrite(projectPath);

  fileWrite(
    `${projectPath}/content.mdx`,
    projectGenContentMdxTemplate(projectGenTemplateParams),
  );

  const projectMetaPath = `${projectPath}/meta.ts`;
  fileWrite(projectMetaPath, projectGenMetaTemplate(projectGenTemplateParams));
  await runPrettier(projectMetaPath);

  const projectIndexPath = `${projectPath}/index.tsx`;
  fileWrite(
    projectIndexPath,
    projectGenIndexTemplate(projectGenTemplateParams),
  );
  await runPrettier(projectIndexPath);

  const projectsIndexPath = `${projectsPath}/index.ts`;
  fileAppendAndSortLines(
    projectsIndexPath,
    projectsIndexGen(projectGenTemplateParams),
  );
  await runPrettier(projectsIndexPath);

  const projectImagesPath = `public/images/projects/${projectSlug}`;
  folderWrite(projectImagesPath);

  logCommitMessageContentCreated(
    ContentTypes.Article,
    projectGenTemplateParams.slug,
  );
}
