import Canvas, { createCanvas } from "canvas";
import { Color } from "color-core";
import { createWriteStream } from "fs";
import { join } from "path";

import * as illustrationsComposite from "@/content/illustrations/composite";
import {
  IllustrationComposite,
  IllustrationCompositePost3Circle,
  assert,
  createColorRgbFromRgbObject,
  isIllustrationCompositePost3Circle,
  isIllustrationStatic,
} from "@/framework";

const illustrationsPublicStaticRelativePath =
  "public/images/illustrations/static";

const illustrationsOutputRelativePath = "public/images/illustrations/composite";
const illustrationsOutputPath = join(
  __dirname,
  "../../../",
  illustrationsOutputRelativePath,
);

export async function toolIllustrationComposer() {
  const illustrationsCompositeItems = Object.values(
    illustrationsComposite,
  ) as readonly IllustrationComposite[];
  for (const illustrationComposite of illustrationsCompositeItems) {
    if (isIllustrationCompositePost3Circle(illustrationComposite)) {
      buildIllustrationCompositePost3Circle(illustrationComposite);
    }
  }
}

async function buildIllustrationCompositePost3Circle(
  illustration: IllustrationCompositePost3Circle,
) {
  const canvas = createCanvas(400, 300);

  const context = canvas.getContext("2d");

  const [illustrationFirstSlot] = illustration.slots;
  assert(illustrationFirstSlot);

  const { primaryColor } = illustration;
  const primaryColorRgb = createColorRgbFromRgbObject(
    new Color(primaryColor).toRgb(),
  );

  const backgroundGradient = context.createLinearGradient(0, 0, 0, 300);
  backgroundGradient.addColorStop(0, `rgba(${primaryColorRgb}, 0)`);
  backgroundGradient.addColorStop(1, `rgb(${primaryColorRgb}, 0.25)`);
  context.fillStyle = backgroundGradient;
  context.fillRect(0, 0, 400, 300);

  let illustrationSlotIndex = 0;
  for await (const illustrationSlot of illustration.slots.filter(
    isIllustrationStatic,
  )) {
    const illustrationSlotPath = join(
      illustrationsPublicStaticRelativePath,
      `${illustrationSlot.slug}.png`,
    );

    const illustrationSlotImage = await Canvas.loadImage(illustrationSlotPath);

    const canvasWidth = 400;
    const canvasHeight = 300;

    const imageDiameter =
      (canvasHeight / 2.5) * (illustrationSlot.scalingAdjustmentFactor ?? 1);

    switch (illustrationSlotIndex) {
      case 0:
        context.drawImage(
          illustrationSlotImage,
          (canvasWidth / 10) * 1.25,
          canvasHeight / 10,
          imageDiameter,
          imageDiameter,
        );
        break;
      case 1:
        context.drawImage(
          illustrationSlotImage,
          (canvasWidth / 10) * 5.5,
          canvasHeight / 10,
          imageDiameter,
          imageDiameter,
        );
        break;
      case 2:
        context.drawImage(
          illustrationSlotImage,
          (canvasWidth / 10) * 3.25,
          (canvasHeight / 10) * 5,
          imageDiameter,
          imageDiameter,
        );
        break;
    }

    illustrationSlotIndex++;
  }

  const illustrationCompositeFilename = `${illustration.slug}.png`;
  const illustrationCompositeFilePathFilename = createWriteStream(
    join(illustrationsOutputPath, illustrationCompositeFilename),
  );
  const illustrationsOutputRelativePathFilename = `${illustrationsOutputRelativePath}/${illustrationCompositeFilename}`;

  canvas.createPNGStream().pipe(illustrationCompositeFilePathFilename);

  illustrationCompositeFilePathFilename.on("finish", () =>
    console.log(
      `✅ Generated composite illustration: ${illustrationsOutputRelativePathFilename}.`,
    ),
  );
}
