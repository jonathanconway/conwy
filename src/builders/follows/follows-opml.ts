import { readFileSync } from "fs";
import { join } from "path";
import { parseStringPromise } from "xml2js";

import { FollowsBySection } from "./follows.types";

export async function getOpmlFollowsBySection(): Promise<FollowsBySection> {
  const opmlPath = join(
    __dirname,
    "../../../public/downloads/pages/follows/Subscriptions-iCloud.opml",
  );
  const opmlContents = readFileSync(opmlPath).toString();
  const opmlParsed = await parseStringPromise(opmlContents);

  const followsBySection: FollowsBySection = {};

  for (const section of opmlParsed.opml.body[0].outline) {
    const sectionTitle = section.$.text;

    if (!section.outline?.length) {
      continue;
    }

    followsBySection[sectionTitle] = followsBySection[sectionTitle] ?? [];
    for (const item of section.outline) {
      followsBySection[sectionTitle].push({
        title: item.$.title,
        url: item.$.htmlUrl,
      });
    }
  }

  return followsBySection;
}
