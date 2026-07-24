import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  html5FrontColor,
  paintBrushIsoColor,
  tailwindFrontColor,
} from "../static";

export const tailwindThoughtsIllustration =
  createIllustrationCompositePost3Circle({
    slug: "tailwind-thoughts",
    illustrations: [tailwindFrontColor, paintBrushIsoColor, html5FrontColor],
    primaryColor: "#008CFF",
  });
