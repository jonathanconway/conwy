import { readFileSync, writeFileSync } from "fs";
import { orderBy } from "lodash";
import { join } from "path";

import { isNotNil, mkDirSyncIfNotExists } from "@/framework";

function getFullPath(filePath: string) {
  return join(__dirname, "..", filePath);
}

export function folderWrite(folderPath: string) {
  const fullPath = getFullPath(folderPath);

  mkDirSyncIfNotExists(fullPath);
}

export function fileWrite(filePath: string, contents: string) {
  const fullPath = getFullPath(filePath);

  writeFileSync(fullPath, contents, {
    flag: "w",
  });
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
  contents: string,
) {
  const beforeContent = readFileSync(filePath).toString();

  const lines = beforeContent.split("\n");

  const constOpenLineIndex = lines.findIndex((line) =>
    line.endsWith(`const ${constName} = {`),
  );
  const constCloseLineIndex =
    lines
      .slice(constOpenLineIndex)
      .findIndex((line) => line.endsWith(`} as const;`)) + constOpenLineIndex;

  const beforeConstLines = lines.slice(
    constOpenLineIndex + 1,
    constCloseLineIndex,
  );
  const beforeConstEntries = beforeConstLines
    .join("")
    .split(",")
    .filter(isNotNil);

  const afterConstLines = orderBy([...beforeConstEntries, `  ${contents}`]);

  const afterContent = [
    ...lines.slice(0, constOpenLineIndex + 1),
    ...afterConstLines,
    ...lines.slice(constCloseLineIndex),
  ].join(`,\n`);

  fileWrite(filePath, afterContent);
}

export function getEnumName<T extends Record<string, string>>(
  enumObject: T,
  enumValue: string,
) {
  return Object.entries(enumObject).find(
    ([, value]) => value === enumValue,
  )?.[0] as string;
}
