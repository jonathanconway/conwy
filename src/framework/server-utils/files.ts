import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  rmSync,
  rmdirSync,
  unlinkSync,
} from "fs";
import { join } from "path";
import pluralize from "pluralize";

import { Meta, MetaType } from "../meta";
import { TypeOfConst } from "../utils";

export const PublicStaticAssetTypes = {
  Images: "images",
  JSON: "json",
} as const;

export type PublicStaticAssetType = TypeOfConst<typeof PublicStaticAssetTypes>;

export function getMainImageUrl(meta: Meta) {
  const path = getPublicStaticContentPath("images", meta.type, meta.slug);
  const base = "main";
  const extension = getExtensionWhichExists(path, "main", [
    "svg",
    "png",
    "jpg",
    "jpeg",
    "gif",
  ]);
  const url = `/images/${pluralize(meta.type)}/${meta.slug}/${base}.${extension}`;
  return url;
}

export function getExtensionWhichExists(
  path: string,
  filenameBase: string,
  filenameExtensions: readonly string[],
) {
  const pathAndFilenameBase = `${path}/${filenameBase}`;
  for (const filenameExtension of filenameExtensions) {
    const pathAndFilename = `${pathAndFilenameBase}.${filenameExtension}`;
    if (existsSync(pathAndFilename)) {
      return filenameExtension;
    }
  }
}

export function getPublicStaticContentPath(
  assetType: PublicStaticAssetType,
  contentType: MetaType,
  contentSlug: string,
  assetSubType?: string,
) {
  return join(
    getRootPath(),
    ["public", assetType, pluralize(contentType), contentSlug, assetSubType]
      .filter(Boolean)
      .join("/") + "/",
  );
}

/**
 * @see https://stackoverflow.com/a/77835228/23341
 */
export function emptyDirSync(path: string) {
  const files = readdirSync(path);
  for (let i = 0; i < files.length; i++) {
    const file = `${path}/${files[i]}`;
    if (lstatSync(file).isDirectory()) {
      rmSync(file, { recursive: true, force: true });
    } else {
      unlinkSync(file);
    }
  }
}

export function emptyAndRmDirSyncIfExists(path: string) {
  if (existsSync(path)) {
    emptyDirSync(path);
    rmdirSync(path);
  }
}

export function mkDirSyncIfNotExists(path: string) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

export function recreateDirSync(path: string) {
  emptyAndRmDirSyncIfExists(path);
  mkDirSyncIfNotExists(path);
}

export function getRootPath() {
  return __dirname.split(".next")[0];
}
