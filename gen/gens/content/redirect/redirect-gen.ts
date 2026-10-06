import { getGenSchemaValues } from "@/framework/server";

import {
  fileAppendToConstObject,
  logCommitMessageContentCreated,
} from "../../../gen-utils";
import { runPrettier } from "../../../run-prettier";

import { redirectGenSchema } from "./redirect-gen-schema";
import { redirectsGenIndexTemplate } from "./redirects-gen-index.template";

export async function redirect() {
  const redirectGenParams = await getGenSchemaValues(redirectGenSchema);

  const redirectsPath = `src/content/redirects/redirects.ts`;

  fileAppendToConstObject(
    redirectsPath,
    "REDIRECTS",
    "Redirects",
    redirectsGenIndexTemplate(redirectGenParams),
  );
  await runPrettier(redirectsPath);

  logCommitMessageContentCreated("redirect", redirectGenParams.slug);
}
