import { ContentTypes } from "@/framework";
import { checkIsGenSchemaPromptsRunResultUserCancelled } from "@/framework/gen";
import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
  logCommitMessageContentCreated,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { communitiesGenIndexTemplate } from "./communities-gen-index.template";
import { communityGenBlurbShortMdxTemplate } from "./community-gen-blurb-short-mdx.template";
import { communityGenIndexTemplate } from "./community-gen-index.template";
import { communityGenSchema } from "./community-gen-schema";
import { generateCommunityGenTemplateParams } from "./community-gen-template-params";

export async function community() {
  const communityGenParams = await getGenSchemaValues(communityGenSchema);
  if (checkIsGenSchemaPromptsRunResultUserCancelled(communityGenParams)) {
    return;
  }
  const communityGenTemplateParams = generateCommunityGenTemplateParams(
    communityGenParams.value,
  );

  const { slug } = communityGenTemplateParams;

  const communitiesPath = `src/content/communities`;
  const communityPath = `${communitiesPath}/${slug}`;

  folderWrite(communityPath);

  fileWrite(
    `${communityPath}/blurb-short.mdx`,
    communityGenBlurbShortMdxTemplate(communityGenTemplateParams),
  );

  const communityIndexPath = `${communityPath}/index.tsx`;
  fileWrite(
    communityIndexPath,
    communityGenIndexTemplate(communityGenTemplateParams),
  );
  runPrettier(communityIndexPath);

  const communitiesIndexPath = `${communitiesPath}/index.ts`;
  fileAppendAndSortLines(
    communitiesIndexPath,
    communitiesGenIndexTemplate(communityGenTemplateParams),
  );
  runPrettier(communitiesIndexPath);

  logCommitMessageContentCreated(ContentTypes.Community, slug);
}
