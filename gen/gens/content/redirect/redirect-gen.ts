import { checkIsGenSchemaPromptsRunResultUserCancelled } from "@/framework/gen";
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
  if (checkIsGenSchemaPromptsRunResultUserCancelled(redirectGenParams)) {
    return;
  }

  const redirectsPath = `src/content/redirects/redirects.ts`;

  fileAppendToConstObject(
    redirectsPath,
    "REDIRECTS",
    "Redirects",
    redirectsGenIndexTemplate(redirectGenParams.value),
  );
  await runPrettier(redirectsPath);

  logCommitMessageContentCreated("redirect", redirectGenParams.value.slug);
}
