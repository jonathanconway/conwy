import { checkIsGenSchemaPromptsRunResultUserCancelled } from "@/framework/gen";
import { getGenSchemaValues } from "@/framework/server";

import {
  fileWrite,
  folderWrite,
  logCommitMessageStructureCreated,
} from "../../gen-utils";
import { runPrettier } from "../../run-prettier";

import { componentGenCssThemeTemplate } from "./component-gen-css-theme.template";
import { componentGenCssTemplate } from "./component-gen-css.template";
import { componentGenIndexTemplate } from "./component-gen-index.template";
import { componentGenMixinsTemplate } from "./component-gen-mixins.template";
import { componentGenMocksTemplate } from "./component-gen-mocks.template";
import { componentGenPropsTemplate } from "./component-gen-props.template";
import { componentGenReadmeTemplate } from "./component-gen-readme.template";
import { componentGenSchema } from "./component-gen-schema";
import { generateComponentGenTemplateParams } from "./component-gen-template-params";
import { componentGenTsxTemplate } from "./component-gen-tsx.template";

export async function component() {
  const componentGenParams = await getGenSchemaValues(componentGenSchema);
  if (checkIsGenSchemaPromptsRunResultUserCancelled(componentGenParams)) {
    return;
  }
  const componentGenTemplateParams = generateComponentGenTemplateParams(
    componentGenParams.value,
  );

  const { path, componentNameKebab } = componentGenTemplateParams;
  const componentsPath = `src/content/components`;
  const componentPath = `${componentsPath}/${path}`;

  // Component folder
  folderWrite(componentPath);

  // Component props
  const componentPropsFilename = `${componentPath}/${componentNameKebab}-props.ts`;
  fileWrite(
    componentPropsFilename,
    componentGenPropsTemplate(componentGenTemplateParams),
  );
  runPrettier(componentPropsFilename);

  // Component mixins
  const componentMixinsFilename = `${componentPath}/${componentNameKebab}.mixins.ts`;
  fileWrite(
    componentMixinsFilename,
    componentGenMixinsTemplate(componentGenTemplateParams),
  );
  runPrettier(componentMixinsFilename);

  // Component css
  const componentCssFilename = `${componentPath}/${componentNameKebab}.css.ts`;
  fileWrite(
    componentCssFilename,
    componentGenCssTemplate(componentGenTemplateParams),
  );
  runPrettier(componentCssFilename);

  // Component css theme
  const componentCssThemeFilename = `${componentPath}/${componentNameKebab}.css-theme.ts`;
  fileWrite(
    componentCssThemeFilename,
    componentGenCssThemeTemplate(componentGenTemplateParams),
  );
  runPrettier(componentCssThemeFilename);

  // Component mocks
  const componentMocksFilename = `${componentPath}/${componentNameKebab}.mocks.tsx`;
  fileWrite(
    componentMocksFilename,
    componentGenMocksTemplate(componentGenTemplateParams),
  );
  runPrettier(componentMocksFilename);

  // Component tsx
  const componentPathFilename = `${componentPath}/${componentNameKebab}.tsx`;
  fileWrite(
    componentPathFilename,
    componentGenTsxTemplate(componentGenTemplateParams),
  );
  runPrettier(componentPathFilename);

  // Component index
  const componentIndexPath = `${componentPath}/index.ts`;
  fileWrite(
    componentIndexPath,
    componentGenIndexTemplate(componentGenTemplateParams),
  );
  runPrettier(componentIndexPath);

  // Component readme
  const componentReadmeFilename = `${componentPath}/README.md`;
  fileWrite(
    componentReadmeFilename,
    componentGenReadmeTemplate(componentGenTemplateParams),
  );
  runPrettier(componentReadmeFilename);

  logCommitMessageStructureCreated("component", componentNameKebab);
}
