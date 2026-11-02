import { readFileSync, readdirSync, writeFileSync } from "fs";
import { startCase, toLower, trim, uniq } from "lodash";

import {
  checkIsNotNil,
  join,
  parseTemplate,
  removeConsecutiveEmptyLines,
  sanitizeJson,
} from "@/framework";

import { logCommitMessageConventional } from "../../../gen/gen-utils";
import { runPrettier } from "../../../gen/run-prettier";

/**
 * Builds VS Code compatible code snippets.
 * Input: All gen templates.
 * Output: code-snippets.json static file.
 */
export async function codeSnippetsBuilder() {
  const rootFolderPath = process.cwd();
  const gensFoldersPath = `${rootFolderPath}/gen/gens`;
  const gensFolders = readdirSync(gensFoldersPath, { recursive: true });
  const gensTemplates = gensFolders
    .filter((genFolder) => String(genFolder).endsWith(".template.ts"))
    .map(String);

  let codeSnippetEntries = {};

  for await (const genTemplateFilePathAndName of gensTemplates) {
    const genTemplateFullFilePathAndName = join(
      gensFoldersPath,
      genTemplateFilePathAndName,
    );
    const templateContent = readFileSync(
      genTemplateFullFilePathAndName,
    ).toString();

    const codeSnippetEntry = await codeSnippetEntryBuilder(
      genTemplateFilePathAndName,
      templateContent,
    );

    codeSnippetEntries = {
      ...codeSnippetEntries,
      ...codeSnippetEntry,
    };
  }

  const snippetsFoldersPathFilename = `${rootFolderPath}/.vscode/conwy.code-snippets`;
  const snippetsContents = readFileSync(snippetsFoldersPathFilename).toString();
  const snippetsJSON = JSON.parse(sanitizeJson(snippetsContents));
  const snippetsJSONOutput = {
    ...snippetsJSON,
    ...codeSnippetEntries,
  };
  const snippetsContentsOutput = JSON.stringify(snippetsJSONOutput);

  writeFileSync(snippetsFoldersPathFilename, snippetsContentsOutput);
  runPrettier(snippetsFoldersPathFilename, "json");

  logCommitMessageConventional("chore", undefined, "update vscode snippets");
}

async function codeSnippetEntryBuilder(
  templateFilePathAndName: string,
  templateContent: string,
) {
  const templateFilenamePre = templateFilePathAndName.split(".template.")[0];
  const templateFilenamePreParts = templateFilenamePre
    .split("/")
    .join(" ")
    .split("-")
    .join(" ")
    .split(" ")
    .filter(checkIsNotIncludedIn("gen"))
    .map(trim)
    .filter(checkIsNotNil)
    .map(toLower);
  const templateFilenamePrePartsUniq = uniq(templateFilenamePreParts);

  const templateTitle = startCase(
    templateFilenamePrePartsUniq.join("/").replaceAll("/", " "),
  );

  const templateInner = parseTemplateForInner(templateContent);
  const testParams = {
    input: templateInner,
    tokenDelimiters: {
      open: "\\$\\{",
      close: "\\}",
    },
  };

  const results = parseTemplate(testParams);
  let templateInnerReplaced = templateInner;

  const tokens = uniq(results.map(([token]) => token));

  for (const [resultToken] of results) {
    const resultTokenIndex = tokens.indexOf(resultToken);

    templateInnerReplaced = templateInnerReplaced.replaceAll(
      resultToken,
      `$${resultTokenIndex}`,
    );
  }

  return {
    [templateTitle]: {
      body: templateInnerReplaced.split("\n"),
    },
  };
}

function checkIsNotIncludedIn(...values: readonly string[]) {
  return (input: string) => !values.includes(input);
}

function parseTemplateForInner(template: string) {
  const inner = template.split("`").slice(1, -1).join("`");
  return removeConsecutiveEmptyLines(inner).trim();
}
