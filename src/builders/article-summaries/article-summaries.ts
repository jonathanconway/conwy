import { pipeline } from "@xenova/transformers";
import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "fs";
import { chain } from "lodash";
import { marked } from "marked";

import { convertMdxToMd } from "@/framework";

const articlesPath = `${__dirname}/../../content/articles`;

export async function buildArticleSummaries() {
  const articlesPathContents = readdirSync(articlesPath).slice(0, 3);
  const articlesPathFolders = articlesPathContents.filter((filename) =>
    lstatSync(`${articlesPath}/${filename}`).isDirectory(),
  );

  articlesPathFolders.forEach(buildArticleSummary);
}

function getMdIntro(md: string) {
  const root = marked.lexer(md);
  return chain(root)
    .takeWhile((token) => token.type !== "heading")
    .map((token) => token.raw)
    .join("\n")
    .value();
}

async function buildArticleSummary(articleFolderName: string) {
  const articlePath = `${articlesPath}/${articleFolderName}`;
  const summaryPathFilename = `${articlePath}/summary.mdx`;

  if (existsSync(summaryPathFilename)) {
    return;
  }

  const md = convertMdxToMd(
    readFileSync(`${articlePath}/content.mdx`).toString(),
  );

  const mdIntro = getMdIntro(md);

  const summaryText = await summarizeArticleText(mdIntro);

  writeFileSync(summaryPathFilename, summaryText);
}

async function summarizeArticleText(articleText: string) {
  const summarizationPipe = await pipeline(
    "summarization",
    "Xenova/bart-large-cnn",
  );

  const output = await summarizationPipe(articleText);

  const summaryText = (output[0] as any).summary_text as string;

  return summaryText;
}
