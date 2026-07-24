import { createWriteStream, existsSync, mkdirSync } from "fs";
import { join } from "path";

import * as illustrationsComposite from "@/content/illustrations/composite";
import * as illustrationLayouts from "@/content/illustrations/layout";
import {
  IllustrationComposite,
  IllustrationLayout,
  checkIsIllustrationTypeComposite,
  isNotNil,
} from "@/framework";
import { drawToCanvasNodeIllustration } from "@/framework/server";

const illustrationFilePathsByFrame = {
  [illustrationLayouts.conwyPostIllustrationLayout.name]:
    "public/images/illustrations/composite",
  [illustrationLayouts.devPostIllustrationLayout.name]:
    "out/images/illustrations/composite",
};

const illustrationSuffixesByFrame = {
  [illustrationLayouts.conwyPostIllustrationLayout.name]: "",
  [illustrationLayouts.devPostIllustrationLayout.name]: "dev",
};

function getFullPath(pathRelativeToSolutionRoot: string) {
  return join(__dirname, "../../../", pathRelativeToSolutionRoot);
}

export async function toolIllustrationComposer() {
  const illustrationsCompositeItems = Object.values(
    illustrationsComposite,
  ) as readonly IllustrationComposite[];
  for await (const illustrationComposite of illustrationsCompositeItems) {
    if (checkIsIllustrationTypeComposite(illustrationComposite)) {
      await buildIllustrationTypeComposite(illustrationComposite);
    }
  }
}

async function buildIllustrationTypeComposite(
  illustration: IllustrationComposite,
) {
  for await (const illustrationLayout of Object.values(illustrationLayouts)) {
    await buildIllustrationTypeCompositeInLayout(
      illustration,
      illustrationLayout,
    );
  }
}

async function buildIllustrationTypeCompositeInLayout(
  illustration: IllustrationComposite,
  illustrationLayout: IllustrationLayout,
) {
  const illustrationCompositeFilenameSuffix =
    illustrationSuffixesByFrame[illustrationLayout.name];
  const illustrationCompositeFilenameBody = [
    illustration.slug,
    illustrationCompositeFilenameSuffix,
  ]
    .filter(isNotNil)
    .join("--");
  const illustrationCompositeFilename = `${illustrationCompositeFilenameBody}.png`;
  const illustrationOutputPathRelative =
    illustrationFilePathsByFrame[illustrationLayout.name];
  const illustrationOutputPathAbsolute = getFullPath(
    illustrationOutputPathRelative,
  );
  const illustrationCompositeFilePathFilename = join(
    illustrationOutputPathAbsolute,
    illustrationCompositeFilename,
  );
  mkdirSync(illustrationOutputPathRelative, {
    recursive: true,
  });
  const illustrationsOutputRelativePathFilename = `${illustrationOutputPathRelative}/${illustrationCompositeFilename}`;

  if (existsSync(illustrationCompositeFilePathFilename)) {
    console.log(
      `⏭️ Skipped already existing composite illustration: ${illustrationsOutputRelativePathFilename}.`,
    );
    return;
  }

  const canvas = await drawToCanvasNodeIllustration(
    illustration,
    illustrationLayout,
  );
  const illustrationCompositeWriteStream = createWriteStream(
    illustrationCompositeFilePathFilename,
  );
  canvas.createPNGStream().pipe(illustrationCompositeWriteStream);

  illustrationCompositeWriteStream.on("finish", () =>
    console.log(
      `✅ Generated composite illustration: ${illustrationsOutputRelativePathFilename}.`,
    ),
  );
}
