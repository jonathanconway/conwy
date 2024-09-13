import { renderMermaid } from "@mermaid-js/mermaid-cli";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";
import pluralize from "pluralize";
import { launch } from "puppeteer";

import {
  Meta,
  getPublicStaticContentPath,
  hashString,
  mkDirSyncIfNotExists,
} from "@/framework";

export async function buildMermaidDiagramImage(
  mermaidDiagramText: string,
  item: Meta,
) {
  return;

  const mermaidDiagramTextHash = hashString(mermaidDiagramText);
  const mermaidPath = generateMermaidPath(item);
  const mermaidFilename = generateMermaidFilename(mermaidDiagramTextHash);
  const mermaidPathAndFilename = generateMermaidPathAndFilename(
    mermaidPath,
    mermaidFilename,
  );

  if (!existsSync(mermaidPathAndFilename)) {
    return buildMermaidFile(
      mermaidPath,
      mermaidPathAndFilename,
      mermaidDiagramText,
    );
  }
}

export function generateMermaidDiagramImageUrl(
  mermaidDiagramText: string,
  item: Meta,
) {
  const mermaidDiagramTextHash = hashString(mermaidDiagramText);
  const mermaidFilename = generateMermaidFilename(mermaidDiagramTextHash);
  const mermaidUrl = generateMermaidUrl(mermaidFilename, item);

  return mermaidUrl;
}

async function buildMermaidFile(
  mermaidPath: string,
  mermaidPathAndFilename: string,
  children: string,
) {
  mkDirSyncIfNotExists(mermaidPath);

  const browser = await launch({
    executablePath: "/opt/homebrew/bin/chromium",
  });

  await browser.newPage();

  const { data: mermaidSvgData } = await renderMermaid(
    browser,
    children,
    "svg",
  );

  const mermaidSvg = mermaidSvgData.toString();

  writeFileSync(mermaidPathAndFilename, mermaidSvg);
}

function generateMermaidFilename(input: string) {
  return `mermaid_${input}.svg`;
}

function generateMermaidUrl(mermaidFilename: string, item: Meta) {
  return `/images/${pluralize(item.type)}/${item.slug}/mermaid/${mermaidFilename}`;
}

function generateMermaidPathAndFilename(path: string, filename: string) {
  return join(path, filename);
}

function generateMermaidPath(item: Meta) {
  return getPublicStaticContentPath("images", item.type, item.slug, "mermaid");
}
