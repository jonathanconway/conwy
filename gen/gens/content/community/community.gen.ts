import { camelCase } from "lodash";

import { titleCase } from "@/framework";

import {
  fileAppendAndSortLines,
  fileWrite,
  folderWrite,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { communitiesIndexGen } from "./communities.index.gen";
import { communityBlurbGen } from "./community.blurb-short.mdx.gen";
import { communityIndexGen } from "./community.index.gen";
import {
  CommunityGenParams,
  CommunityGenTemplateParams,
} from "./community.params";

export async function community(params: CommunityGenParams) {
  const { name } = params;

  const communitiesPath = `src/content/communities`;
  const communityPath = `${communitiesPath}/${name}`;

  const communityGenTemplateParams: CommunityGenTemplateParams = {
    ...params,

    title: titleCase(name),
    nameRootObject: `${camelCase(name)}Community`,
  };

  folderWrite(communityPath);

  fileWrite(`${communityPath}/blurb-short.mdx`, communityBlurbGen());

  const communityIndexPath = `${communityPath}/index.tsx`;
  fileWrite(communityIndexPath, communityIndexGen(communityGenTemplateParams));
  runPrettier(communityIndexPath);

  const communitiesIndexPath = `${communitiesPath}/index.ts`;
  fileAppendAndSortLines(
    communitiesIndexPath,
    communitiesIndexGen(communityGenTemplateParams),
  );
  runPrettier(communitiesIndexPath);
}
