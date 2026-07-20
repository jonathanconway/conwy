import { IllustrationStaticGenTemplateParams } from "./illustration.params";

export default ({
  name,
  nameCamel,
  primaryColor,
}: IllustrationStaticGenTemplateParams) =>
  `

import { createIllustrationStatic } from "@/framework/client";

export const ${nameCamel}IllustrationStatic = createIllustrationStatic({
  slug: "${name}",${
    primaryColor
      ? `
  primaryColor: "${primaryColor}",
`
      : ""
  }
});

`.trim();
