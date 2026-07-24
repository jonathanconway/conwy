import { createIllustrationCompositePost3Circle } from "@/framework/client";

import {
  cubeDynamicClayIllustrationStatic,
  labDynamicColorIllustrationStatic,
  tableIllustrationStatic,
} from "../static";

export const combinatorialTestingIllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "combinatorial-testing",
    illustrations: [
      tableIllustrationStatic,
      labDynamicColorIllustrationStatic,
      cubeDynamicClayIllustrationStatic,
    ],
    primaryColor: labDynamicColorIllustrationStatic.primaryColor!,
  });
