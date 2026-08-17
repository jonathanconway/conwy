import { writeFileSync } from "fs";
import { join } from "path";

import { deepMergeMapsOfArrays } from "@/framework";

import { getOpmlFollowsBySection } from "./follows-opml";
import { getSafariFollowsBySection } from "./follows-safari";

/**
 * Builds a JSON-encoded list of sources I follow.
 * Input: Browser exported bookmarks from Safari (HTML) and Chrome (OPML).
 * Output: follows.json content static file.
 */
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
