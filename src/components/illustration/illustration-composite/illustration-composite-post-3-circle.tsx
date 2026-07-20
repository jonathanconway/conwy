import { Color } from "color-core";
import { useEffect, useRef } from "react";

import {
  IllustrationCompositePost3Circle as IllustrationCompositePost3Circle_,
  convertColorRgbToColorRgba,
  waitFor,
} from "@/framework/client";

const illustrationsStaticUrlBasePath = "/images/illustrations/static";

export async function drawIllustrationCompositePost3Circle(
  canvas: HTMLCanvasElement,
  illustration: IllustrationCompositePost3Circle_,
) {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const canvasSize = { width: 400, height: 300 };

  const backgroundGradient = context.createLinearGradient(
    0,
    0,
    0,
    canvasSize.height,
  );

  const primaryColor = new Color(illustration.primaryColor);
  const primaryColorRgb = primaryColor.toRgb();
  backgroundGradient.addColorStop(
    0,
    `rgba(${convertColorRgbToColorRgba(primaryColorRgb, 0)})`,
  );
  backgroundGradient.addColorStop(
    1,
    `rgba(${convertColorRgbToColorRgba(primaryColorRgb, 0.25)})`,
  );

  context.fillStyle = backgroundGradient;
  context.fillRect(0, 0, canvasSize.width, canvasSize.height);

  const slotsImageDiameter = 150;

  const [slot0, slot1, slot2] = illustration.slots;

  const slot0Path = `${illustrationsStaticUrlBasePath}/${slot0.slug}.png`;
  const slot0Image = new Image();
  slot0Image.src = slot0Path;
  slot0Image.onload = () => {
    context.drawImage(
      slot0Image,
      canvasSize.width / 4 - slotsImageDiameter / 2,
      canvasSize.height / 4 - slotsImageDiameter / 2,
      slotsImageDiameter,
      slotsImageDiameter,
    );
  };

  const slot1Path = `${illustrationsStaticUrlBasePath}/${slot1.slug}.png`;
  const slot1Image = new Image();
  slot1Image.src = slot1Path;
  slot1Image.onload = () => {
    context.drawImage(
      slot1Image,
      (canvasSize.width / 4) * 3 - slotsImageDiameter / 2,
      canvasSize.height / 4 - slotsImageDiameter / 2,
      slotsImageDiameter,
      slotsImageDiameter,
    );
  };

  const slot2Path = `${illustrationsStaticUrlBasePath}/${slot2.slug}.png`;
  const slot2Image = new Image();
  slot2Image.src = slot2Path;
  slot2Image.onload = () => {
    context.drawImage(
      slot2Image,
      canvasSize.width / 2 - slotsImageDiameter / 2,
      (canvasSize.height / 4) * 3 - slotsImageDiameter / 2,
      slotsImageDiameter,
      slotsImageDiameter,
    );
  };
}

export interface IllustrationCompositePost3CircleProps {
  readonly illustration: IllustrationCompositePost3Circle_;
}

export function IllustrationCompositePost3Circle(
  props: IllustrationCompositePost3CircleProps,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!canvasRef.current) {
        return;
      }
      const canvasEl = canvasRef.current;
      drawIllustrationCompositePost3Circle(canvasEl, props.illustration);
    }, 1000);
  }, []);

  return <canvas width="400" height="300" ref={canvasRef}></canvas>;
}
