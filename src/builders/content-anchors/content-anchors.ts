import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";
import { kebabCase, uniq } from "lodash";
import { marked } from "marked";
import { join } from "path";

import {
  ContentAnchorsMap,
  ContentLink,
  ContentType,
  ContentTypes,
  Slug,
} from "@/framework";
import { mkDirSyncIfNotExists } from "@/framework/server";

/**
 * Builds a JSON-encoded list of content anchors.
 * Input: All articles - MDX content files.
 * Output: content-anchors.json static file.
 */
export async function contentAnchorsBuilder() {
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
    buildContentAnchorFromArticle(
      contentAnchorsMap,
      anchorContentName,
      articleFolderName,
    );
  }
}

function buildContentAnchorFromArticle(
  contentAnchorsMap: ContentAnchorsMap,
  anchorContentName: string,
  articleFolderName: string,
) {
  const [_anchorType, anchorContentType, anchorContentSlug] =
    anchorContentName.split("--") as ["content", ContentType, Slug];
  const anchorContentLink: ContentLink = {
    type: anchorContentType as ContentType,
    slug: anchorContentSlug,
  };

  const articleSlug = kebabCase(articleFolderName);
  const containingContentLink: ContentLink = {
    type: ContentTypes.Article,
    slug: articleSlug,
  };

  const anchor = {
    anchorContentLink,
    containingContentLink,
  };

  contentAnchorsMap[anchorContentType] =
    contentAnchorsMap[anchorContentType] ?? {};
  contentAnchorsMap[anchorContentType][anchorContentSlug] =
    contentAnchorsMap[anchorContentType][anchorContentSlug] ?? [];
  contentAnchorsMap[anchorContentType][anchorContentSlug] = [
    ...(contentAnchorsMap[anchorContentType][anchorContentSlug] ?? []),
    anchor,
  ];
}
