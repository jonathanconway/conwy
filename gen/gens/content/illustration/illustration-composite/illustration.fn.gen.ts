import { IllustrationCompositeGenTemplateParams } from "./illustration.params";

export default ({ name, nameCamel }: IllustrationCompositeGenTemplateParams) =>
  `

import { createIllustrationCompositePost3Circle } from "@/framework/client";

export const ${nameCamel}IllustrationComposite =
  createIllustrationCompositePost3Circle({
    slug: "${name}",
    illustrations: [],
    primaryColor: "",
  });

`.trim();
