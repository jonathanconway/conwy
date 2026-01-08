import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { parseStringPromise } from "xml2js";

import { Link } from "@/framework";

type FollowsBySection = Record<string, Link[]>;

type FollowsEntries = readonly (readonly [string, readonly Link[]])[];

async function getOpmlFollowsBySection(): Promise<FollowsBySection> {
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

async function getSafariFollowsBySection(): Promise<FollowsBySection> {
  const followsBySection: FollowsBySection = {};

  const safariExportPath = join(
    __dirname,
    "../../../public/downloads/pages/follows/SafariExportBookmarks.html",
  );
  const safariExportContents = readFileSync(safariExportPath).toString();

  const safariExportContentsLines = safariExportContents.split("\n");
  const sectionLines = safariExportContentsLines.filter((line) =>
    line.includes("		<DT><H3>"),
  );

  let sectionLineIndex = 0;
  for (const sectionLine of sectionLines) {
    const sectionTitle = sectionLine.split("<H3>")[1].split("</H3>")[0];
    followsBySection[sectionTitle] = followsBySection[sectionTitle] ?? [];

    const sectionLineStartIndex =
      safariExportContentsLines.indexOf(sectionLine);
    const sectionLineNextStartIndex = safariExportContentsLines.indexOf(
      sectionLines[sectionLineIndex + 1],
    );
    sectionLineIndex++;

    for (
      let lineIndex = sectionLineStartIndex + 1;
      lineIndex < sectionLineNextStartIndex;
      lineIndex++
    ) {
      if (safariExportContentsLines[lineIndex].startsWith("		</DL><p>")) {
        continue;
      }

      if (safariExportContentsLines[lineIndex].includes("<DT><A")) {
        const safariExportContentsLineLinkHTML = (
          "<A" + safariExportContentsLines[lineIndex].split("<A")[1]
        ).trim();
        const safariExportContentsLineLink = await parseStringPromise(
          safariExportContentsLineLinkHTML,
        );
        followsBySection[sectionTitle].push({
          title: safariExportContentsLineLink.A._,
          url: safariExportContentsLineLink.A.$.HREF,
        });
      }
    }
  }
  return followsBySection;
}

export async function buildFollows() {
  const followsBySection: FollowsBySection = {};
  const followsBySectionResults = await Promise.all([
    getOpmlFollowsBySection(),
    getSafariFollowsBySection(),
  ]);
  for (const followsBySectionResult of followsBySectionResults) {
    for (const [section, items] of Object.entries(followsBySectionResult)) {
      followsBySection[section] = followsBySection[section] ?? [];
      followsBySection[section].push(...items);
    }
  }

  const followsJson = JSON.stringify(followsBySection);
  const followsJsonPath = join(
    __dirname,
    `../../content/pages/follows/follows.json`,
  );

  writeFileSync(followsJsonPath, followsJson);
}
