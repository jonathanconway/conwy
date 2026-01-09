import { writeFileSync } from "fs";
import { join } from "path";

import { deepMergeMapsOfArrays } from "@/framework";

import { getOpmlFollowsBySection } from "./follows-opml";
import { getSafariFollowsBySection } from "./follows-safari";

export async function buildFollows() {
  const followsBySectionResults = await Promise.all([
    getOpmlFollowsBySection(),
    getSafariFollowsBySection(),
  ]);
  const followsBySection = deepMergeMapsOfArrays(followsBySectionResults);

  const followsJson = JSON.stringify(followsBySection);
  const followsJsonPath = join(
    __dirname,
    `../../content/pages/follows/follows.json`,
  );

  writeFileSync(followsJsonPath, followsJson);
}
