import { copyFileSync, existsSync } from "fs";
import { Vibrant } from "node-vibrant/node";
import { join } from "path";

import { assert, createColorRgb } from "@/framework";

import { illustrationStatic } from "../../../gen/gens";

const illustrationsPublicStaticRelativePath =
  "public/images/illustrations/static";
const illustrationsPublicStaticPath = join(
  __dirname,
  "../../../",
  illustrationsPublicStaticRelativePath,
);

export async function toolIllustrationStaticImport() {
  const imageFileArg = process.argv.find((arg) =>
    arg.startsWith("--imageFile"),
  );
  assert(imageFileArg);

  const imageFileArgValue = imageFileArg.split("=")[1].trim();
  const imageFileArgValueFilename = imageFileArgValue.split("/").slice(-1)[0];

  const slug = imageFileArgValueFilename.split(".")[0];

  const v = Vibrant.from(imageFileArgValue);
  const palette = await v.getPalette();
  assert(palette.LightVibrant);

  const primaryColorRgb = createColorRgb(...palette.LightVibrant.rgb);
  const primaryColor = `rgb(${primaryColorRgb})`;

  const imageFileDestinationPublicPathFilename = `${illustrationsPublicStaticPath}/${imageFileArgValueFilename}`;

  if (!existsSync(imageFileDestinationPublicPathFilename)) {
    copyFileSync(imageFileArgValue, imageFileDestinationPublicPathFilename);
  }

  illustrationStatic({
    name: slug,
    primaryColor,
  });

  const illustrationsPublicRelativePathFilename = `${illustrationsPublicStaticRelativePath}/${imageFileArgValueFilename}`;

  console.log(
    `✅ Generated static illustration: ${illustrationsPublicRelativePathFilename}.`,
  );
}
