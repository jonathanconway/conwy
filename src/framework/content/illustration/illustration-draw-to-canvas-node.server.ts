import Canvas, { createCanvas } from "canvas";
import { join } from "path";

import {
  IllustrationBackground,
  checkIsIllustrationTypeBackground,
} from "./illustration-background";
import { IllustrationComposite } from "./illustration-composite";
import {
  IllustrationLayout,
  IllustrationLayoutSlot,
} from "./illustration-layout";
import {
  IllustrationStatic,
  checkIsIllustrationTypeStatic,
} from "./illustration-static";
import { parseNumberOrApplyPercentage } from "./percentage";

const illustrationsPublicStaticRelativePath =
  "public/images/illustrations/static";

export async function drawToCanvasNodeIllustration(
  illustration: IllustrationComposite,
  illustrationLayout: IllustrationLayout,
) {
  const canvas = createCanvas(
    illustrationLayout.size.w,
    illustrationLayout.size.h,
  );

  for (const slotIllustrationName in illustration.illustrations) {
    const slotIllustration = illustration.illustrations[slotIllustrationName];
    const illustrationLayoutSlot =
      illustrationLayout.slots[slotIllustrationName];

    switch (true) {
      case checkIsIllustrationTypeBackground(slotIllustration):
        drawToCanvasNodeIllustrationBackground(
          canvas,
          slotIllustration,
          illustrationLayoutSlot,
        );
        break;
      case checkIsIllustrationTypeStatic(slotIllustration):
        await drawToCanvasNodeIllustrationStatic(
          canvas,
          slotIllustration,
          illustrationLayoutSlot,
        );
        break;
    }
  }

  return canvas;
}

function drawToCanvasNodeIllustrationBackground(
  canvas: Canvas.Canvas,
  illustration: IllustrationBackground,
  illustrationLayoutSlot: IllustrationLayoutSlot,
) {
  const context = canvas.getContext("2d");

  const backgroundGradient = context.createLinearGradient(0, 0, 0, 300);
  for (const colorStop of illustration.colorStops) {
    backgroundGradient.addColorStop(colorStop.offset, colorStop.color);
  }

  context.fillStyle = backgroundGradient;

  const { x, y, w, h } = getCanvasProjectionCoordinates(
    canvas,
    illustrationLayoutSlot,
  );

  context.fillRect(x, y, w, h);
}

async function drawToCanvasNodeIllustrationStatic(
  canvas: Canvas.Canvas,
  illustration: IllustrationStatic,
  illustrationLayoutSlot: IllustrationLayoutSlot,
) {
  const nodeCanvas = canvas as Canvas.Canvas;
  const context = nodeCanvas.getContext("2d");

  const imagePath = join(
    illustrationsPublicStaticRelativePath,
    `${illustration.slug}.png`,
  );
  const image = await Canvas.loadImage(imagePath);

  const { x, y, w, h } = getCanvasProjectionCoordinates(
    canvas,
    illustrationLayoutSlot,
  );

  context.drawImage(image, x, y, w, h);
}

function getCanvasProjectionCoordinates(
  canvas: Canvas.Canvas,
  illustrationLayoutSlot: IllustrationLayoutSlot,
) {
  const { position, size } = illustrationLayoutSlot;

  const x = parseNumberOrApplyPercentage(position.x, canvas.width);
  const y = parseNumberOrApplyPercentage(position.y, canvas.height);
  const w = parseNumberOrApplyPercentage(size.w, canvas.width);
  const h = parseNumberOrApplyPercentage(size.h, canvas.height);

  return {
    x,
    y,
    w,
    h,
  };
}
