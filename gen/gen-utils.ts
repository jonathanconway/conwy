import { existsSync, readFileSync, writeFileSync } from "fs";
import { orderBy } from "lodash";
import { join } from "path";

import { CONTENT_TYPE_LABELS_PLURAL, ContentType, Slug } from "@/framework";
import { mkDirSyncIfNotExists } from "@/framework/server";

function getFullPath(filePath: string) {
  return join(__dirname, "..", filePath);
}

export function folderWrite(folderPath: string) {
  const fullPath = getFullPath(folderPath);

  const existedBeforeWrite = existsSync(fullPath);

  mkDirSyncIfNotExists(fullPath);

  if (!existedBeforeWrite) {
    console.log(`📁 Created folder: ${folderPath}`);
  }
}

export function fileWrite(filePath: string, contents: string) {
  const fullPath = getFullPath(filePath);

  const existedBeforeWrite = existsSync(fullPath);

  writeFileSync(fullPath, contents);

  if (existedBeforeWrite) {
    console.log(`📄 Updated file ${filePath}`);
  } else {
    console.log(`📄 Created file ${filePath}`);
  }
}

export function fileAppendAndSortLines(filePath: string, contents: string) {
  const beforeContent = readFileSync(filePath).toString();

  const lines = beforeContent.split("\n");
  lines.push(contents);

  const linesOrdered = orderBy(lines);
  const afterContent = linesOrdered.join("\n");

  fileWrite(filePath, afterContent);
}

export function fileAppendToConstObject(
  filePath: string,
  constName: string,
  constType: string | undefined,
  contents: string,
) {
  const fileContent = readFileSync(filePath).toString();
  const fileContentLines = fileContent.split("\n");

  const constMatch = constType
    ? `const ${constName}: ${constType} = {`
    : `const ${constName} = {`;

  const constOpenLineIndex = fileContentLines.findIndex((line) =>
    line.includes(constMatch),
  );
  const linesUpToConst = fileContentLines.slice(0, constOpenLineIndex);

  const constDeclareLine = fileContentLines[constOpenLineIndex];
  const constCloseLineIndex = fileContentLines
    .slice(constOpenLineIndex, fileContentLines.length)
    .findIndex((line) => line === "};");

  const linesAfterConst = fileContentLines.slice(
    constCloseLineIndex,
    fileContentLines.length,
  );
  const constLines = fileContentLines.slice(
    constOpenLineIndex + 1,
    constCloseLineIndex,
  );

  const constLinesWithNewEntry = [...constLines, contents];

  const fileContentLinesWithNewEntry = [
    ...linesUpToConst,
    constDeclareLine,
    ...constLinesWithNewEntry,
    ...linesAfterConst,
  ];
  const fileContentWithNewEntry = fileContentLinesWithNewEntry.join("\n");

  fileWrite(filePath, fileContentWithNewEntry);
}

export function getEnumName<T extends Record<string, string>>(
  enumObject: T,
  enumValue: string,
) {
  return Object.entries(enumObject).find(
    ([, value]) => value === enumValue,
  )?.[0] as string;
}

export async function logCommitMessageContentCreated(
  contentType: ContentType | string,
  contentSlug: Slug,
) {
  const { default: clipboard } = await import("clipboardy");
  const commitMessage = `content(${CONTENT_TYPE_LABELS_PLURAL[contentType] ?? contentType}): ${contentSlug}`;
  console.log(`⑂ Commit message: ${commitMessage}`);
  clipboard.write(commitMessage);
}
