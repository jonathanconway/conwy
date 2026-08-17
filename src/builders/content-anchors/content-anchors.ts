import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";
import { uniq } from "lodash";
import { marked } from "marked";
import { join } from "path";

import { ContentAnchorsMap } from "@/framework";
import { mkDirSyncIfNotExists } from "@/framework/server";

/**
 * Builds a JSON-encoded list of content anchors.
 * Input: All articles - MDX content files.
 * Output: content-anchors.json static file.
 */
export async function buildContentAnchors() {
  buildContentAnchorsFromArticles();
}

async function buildContentAnchorsFromArticles() {
  const contentAnchorsMap: ContentAnchorsMap = {};
  const articlesFoldersPath = `${process.cwd()}/src/content/articles`;
  const articlesFolders = readdirSync(articlesFoldersPath);

  for (const articleFolderName of articlesFolders) {
    const articleFolderPath = join(articlesFoldersPath, articleFolderName);
    const isDirectory = lstatSync(articleFolderPath).isDirectory();
    if (!isDirectory) {
      continue;
    }

    buildContentAnchorsFromArticle(
      contentAnchorsMap,
      articleFolderPath,
      articleFolderName,
    );
  }

  const builderOutPath = `${process.cwd()}/builder-out`;
  const builderOutContentAnchorsPathFilename = `${builderOutPath}/content-anchors.json`;
  mkDirSyncIfNotExists(builderOutPath);

  const contentAnchorsSlugsByContentTypeJson =
    JSON.stringify(contentAnchorsMap);

  writeFileSync(
    builderOutContentAnchorsPathFilename,
    contentAnchorsSlugsByContentTypeJson,
  );
}

function buildContentAnchorsFromArticle(
  contentAnchorsMap: ContentAnchorsMap,
  articleFolderPath: string,
  articleFolderName: string,
) {
  const articleContentMdxPath = join(articleFolderPath, "content.mdx");

  const articleContentMdx = readFileSync(articleContentMdxPath).toString();
  const articleContentHtml = marked(articleContentMdx);
  const articleContentJsDom = new JSDOM(`<!DOCTYPE html>${articleContentHtml}`);
  const anchorEls = Array.from(
    articleContentJsDom.window.document.querySelectorAll("a[name]"),
  );
  const anchorContentNames = uniq(
    anchorEls.map((anchorEl) => anchorEl.getAttribute("name")),
  ).filter((anchorContentName) =>
    anchorContentName?.startsWith("content--"),
  ) as string[];

  for (const anchorContentName of anchorContentNames) {
    const [anchorType, contentType, contentSlug] =
      anchorContentName?.split("--");

    contentAnchorsMap[contentType] = contentAnchorsMap[contentType] ?? {};
    contentAnchorsMap[contentType][contentSlug] =
      contentAnchorsMap[contentType][contentSlug] ?? [];
    contentAnchorsMap[contentType][contentSlug] = [
      ...(contentAnchorsMap[contentType][contentSlug] ?? []),
      {
        containingContentType: "article",
        containingContentSlug: articleFolderName,
      },
    ];
  }
}
