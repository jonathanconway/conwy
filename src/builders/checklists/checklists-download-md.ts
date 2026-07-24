import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";

import { ChecklistMeta } from "@/framework";
import { mkDirSyncIfNotExists } from "@/framework/server";

export async function buildChecklistDownloadMds() {
  const checklistMetas = await getChecklistMetas(getChecklistFolders());
  for (const checklistMeta of checklistMetas) {
    buildChecklistDownloadMd(checklistMeta);
  }
}

async function buildChecklistDownloadMd(checklistMeta: ChecklistMeta) {
  const { slug } = checklistMeta;
  const checklistMdFilePathName = `${process.cwd()}/src/content/checklists/${slug}/content.mdx`;
  const checklistMdBody = readFileSync(checklistMdFilePathName).toString();

  const checklistDownloadMdFilePath = `${process.cwd()}/public/downloads/checklists/${slug}-checklist`;
  mkDirSyncIfNotExists(checklistDownloadMdFilePath);

  const checklistDownloadMdFilePathName = `${checklistDownloadMdFilePath}/${slug}.md`;
  writeFileSync(checklistDownloadMdFilePathName, checklistMdBody);
}

function getChecklistFolders() {
  const checklistsPath = `${process.cwd()}/src/content/checklists`;
  const checklistDir = readdirSync(checklistsPath);
  const checklistFolders = checklistDir.filter((checklistDirItem) =>
    lstatSync(`${checklistsPath}/${checklistDirItem}`).isDirectory(),
  );
  return checklistFolders;
}

async function getChecklistMetas(
  checklistFolders: readonly string[],
): Promise<readonly ChecklistMeta[]> {
  const checklistsPath = `${process.cwd()}/src/content/checklists`;
  return await Promise.all(
    checklistFolders.map(async (checklistFolder) => {
      const checklistMetaPathFileName = `${checklistsPath}/${checklistFolder}/meta`;
      return (await import(checklistMetaPathFileName)).meta;
    }),
  );
}
