import { createIllustrationCompositePost3Circle } from "@/framework";

import {
  chartDynamicColorIllustrationStatic,
  folderDynamicColorIllustrationStatic,
} from "../static";
import { flightIllustrationStatic } from "../static/flight";

export const universalFolderStructureIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "universal-folder-structure",
    illustrations: [
      flightIllustrationStatic,
      chartDynamicColorIllustrationStatic,
      folderDynamicColorIllustrationStatic,
    ],
    primaryColor: flightIllustrationStatic.primaryColor!,
  });
