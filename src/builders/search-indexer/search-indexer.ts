import { rmSync } from "fs";
import { PagefindIndex } from "pagefind";
import { join } from "path";

import {
  ArticleMeta,
  ContentTypes,
  MicroMeta,
  getContentUrlPath,
  titleCase,
} from "@/framework";
import { importContentMetas, readContentMdx } from "@/framework/server";

export async function searchIndexerBuilder() {
  rmSync(join(process.cwd(), "public/pagefind"), {
    recursive: true,
    force: true,
  });

  const { createIndex } = await import("pagefind");
  const { index } = await createIndex();
  if (!index) {
    throw new Error("Failed to create Pagefind index");
  }

  await addCustomRecordArticles(index);
  await addCustomRecordMicros(index);

  await index.writeFiles({
    outputPath: "public/pagefind",
  });
}

async function addCustomRecordArticles(index: PagefindIndex) {
  const metas = await importContentMetas<ArticleMeta>(ContentTypes.Article);

  for await (const meta of metas) {
    await addCustomRecordArticle(index, meta);
  }
}

async function addCustomRecordArticle(
  index: PagefindIndex,
  contentMeta: ArticleMeta,
) {
  const title = contentMeta.title;
  const { slug: contentSlug, type: contentType } = contentMeta;
  const url = "/" + getContentUrlPath(contentMeta);
  const contentUrl = url;
  const content = readContentMdx(ContentTypes.Article, contentMeta.slug);

  const meta = {
    contentSlug,
    contentType,
    contentUrl,
    title,
  };

  await index.addCustomRecord({
    url,
    meta,
    content,
    language: "en",
  });
}

async function addCustomRecordMicros(index: PagefindIndex) {
  const metas = await importContentMetas<MicroMeta>(ContentTypes.Micro);

  for await (const meta of metas) {
    await addCustomRecordMicro(index, meta);
  }
}

async function addCustomRecordMicro(
  index: PagefindIndex,
  contentMeta: MicroMeta,
) {
  const title = titleCase(contentMeta.slug);
  const { slug: contentSlug, type: contentType, blurb } = contentMeta;
  const url = "/" + getContentUrlPath(contentMeta);
  const contentUrl = url;
  const content = blurb;

  const meta = {
    contentSlug,
    contentType,
    contentUrl,
    title,
  };

  await index.addCustomRecord({
    url,
    meta,
    content,
    language: "en",
  });
}
