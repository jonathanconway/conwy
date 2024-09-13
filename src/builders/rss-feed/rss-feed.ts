import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { escape } from "lodash";

import { ArticleMeta, convertMdToHTML, sortArticleMetas } from "@/framework";
import { packageInfo } from "@/package-info";

function getArticleFolders() {
  const articlesPath = `${__dirname}/../../content/articles`;
  const articleDir = readdirSync(articlesPath);
  const articleFolders = articleDir.filter((articleDirItem) =>
    lstatSync(`${articlesPath}/${articleDirItem}`).isDirectory(),
  );
  return articleFolders;
}

async function getArticleMetas(
  articleFolders: readonly string[],
): Promise<readonly ArticleMeta[]> {
  return await Promise.all(
    articleFolders.map(
      async (articleFolder) =>
        (await import(`@/content/articles/${articleFolder}/meta`)).meta,
    ),
  );
}

async function getArticleEscapedHTML(slug: string) {
  return escape(
    await convertMdToHTML(
      readFileSync(
        `${__dirname}/../../content/articles/${slug}/content.mdx`,
      ).toString(),
    ),
  );
}

export async function buildRssFeed() {
  const articleMetas = sortArticleMetas(
    await getArticleMetas(getArticleFolders()),
  );

  const articleEscapedHTMLs = Object.fromEntries(
    await Promise.all(
      articleMetas.map(async (articleMeta) => [
        articleMeta.slug,
        await getArticleEscapedHTML(articleMeta.slug),
      ]),
    ),
  ) as Record<string, string>;

  const filename = "feed.xml";

  const rss = `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom" xml:base="${packageInfo.homepage}">
  <title>${packageInfo.name}</title>
  <subtitle>Blog articles by ${packageInfo.author.name}</subtitle>
  <link href="${packageInfo.homepage}/feed.xml" rel="self"/>
  <link href="${packageInfo.homepage}/"/>
  <updated>${new Date(articleMetas[0].date).toISOString()}</updated>
  <id>${packageInfo.homepage}</id>
  <author>
    <name>${packageInfo.author.name}</name>
    <email>${packageInfo.author.email}</email>
  </author>
  ${articleMetas
    .map(
      (articleMeta) =>
        `
  <entry>
    <title>${articleMeta.title}</title>
    <link href="https://conwy.co/articles/${articleMeta.slug}" />
    <updated>${new Date(articleMetas[0].date).toISOString()}</updated>
    <id>${articleMeta.slug}</id>
    <content xml:lang="en" type="html">${articleEscapedHTMLs[articleMeta.slug]}</content>
  </entry>
  `,
    )
    .join("\n")}
  </feed>`;

  writeFileSync(`${__dirname}/../../../public/${filename}`, rss);
}
