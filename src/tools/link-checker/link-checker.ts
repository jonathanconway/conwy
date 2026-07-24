import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
import { check } from "linkinator";
import { partition } from "lodash";
import { marked } from "marked";
import { join } from "path";

import { isNotNil } from "@/framework";
import { getFolderFileTree } from "@/framework/server";

import linkCheckerSkipList from "./link-checker-skip-list.json";

const contentPath = join(__dirname, "../../content");

export async function toolLinkChecker() {
  const foldersFiles = getFolderFileTree(contentPath);
  const foldersFilesMdx = foldersFiles.filter((folderFile) =>
    folderFile.endsWith(".mdx"),
  );

  const skippedHrefs = [];
  for await (const folderFileMdx of foldersFilesMdx) {
    const result = await toolLinkCheckerContentMdx(folderFileMdx);
    skippedHrefs.push(...result.skippedHrefs);
  }

  for (const skippedHref of skippedHrefs) {
    console.log(`Skipped ${skippedHref} ⏭️. Please check manually.`);
  }
}

async function toolLinkCheckerContentMdx(
  folderFileMdx: string,
): Promise<{ readonly skippedHrefs: readonly string[] }> {
  console.log("\n");
  console.log(`Checking links in ${folderFileMdx}`);

  const mdxContents = readFileSync(folderFileMdx).toString();

  const mdxContentsHtml = marked(mdxContents);

  const jsDom = new JSDOM(`<!DOCTYPE html>${mdxContentsHtml}`);

  const linkEls = Array.from(jsDom.window.document.querySelectorAll("a[href]"));
  const linkHrefs = linkEls
    .map((linkEl) => linkEl.getAttribute("href"))
    .filter(isNotNil);
  const linkExternalHttpHrefs = linkHrefs
    .filter(checkIsExternalHttpUrl)
    .slice(0, 3);

  const [linkExternalHttpHrefsNotSkipped, linkExternalHttpHrefsSkipped] =
    partition(
      linkExternalHttpHrefs,
      (url) => !linkCheckerSkipList.includes(url),
    );

  for await (const linkHref of linkExternalHttpHrefsNotSkipped) {
    await toolLinkCheckerCheckLink(linkHref);
  }

  return Promise.resolve({
    skippedHrefs: linkExternalHttpHrefsSkipped,
  });
}

function checkIsExternalHttpUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

async function toolLinkCheckerCheckLink(url: string) {
  const { passed } = await check({ path: url });

  console.log(`Checking ${url}`, passed ? "✅" : "❌");
}
