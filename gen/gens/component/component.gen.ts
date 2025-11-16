import { kebabCase, startCase } from "lodash";

import { fileWrite, folderWrite } from "../../gen-utils";
import { runPrettier } from "../../run-prettier";

import componentCssThemeGen from "./component.css-theme.gen";
import componentCssGen from "./component.css.gen";
import componentFnGen from "./component.fn.gen";
import componentMixinsGen from "./component.mixins.gen";
import componentMocksGen from "./component.mocks.gen";
import { ComponentGenParams } from "./component.params";
import componentReadmeGen from "./component.readme.gen";
import componentStoriesGen from "./component.stories.gen";

export function component(params: ComponentGenParams) {
  const { name } = params;

  const componentPath = `src/components/${name}`;

  const nameComponent = startCase(kebabCase(name));
  const nameComponentProps = `${nameComponent}Props`;
  const nameComponentPropsMock = `create${nameComponentProps}Mock`;

  const templateParams = {
    ...params,
    nameComponent,
    nameComponentProps,
    nameComponentPropsMock,
  };

  folderWrite(componentPath);

  const componentTsxPath = `${componentPath}/${name}.tsx`;
  fileWrite(componentTsxPath, componentFnGen(templateParams));
  runPrettier(componentTsxPath);

  const componentMixinsPath = `${componentPath}/${name}.mixins.ts`;
  fileWrite(componentMixinsPath, componentMixinsGen(templateParams));
  runPrettier(componentMixinsPath);

  const componentCssPath = `${componentPath}/${name}.css.ts`;
  fileWrite(componentCssPath, componentCssGen(templateParams));
  runPrettier(componentCssPath);

  const componentCssThemePath = `${componentPath}/${name}.css-theme.ts`;
  fileWrite(componentCssThemePath, componentCssThemeGen(templateParams));
  runPrettier(componentCssThemePath);

  const componentMocksPath = `${componentPath}/${name}.mocks.tsx`;
  fileWrite(componentMocksPath, componentMocksGen(templateParams));
  runPrettier(componentMocksPath);

  const componentStoriesPath = `${componentPath}/${name}.stories.tsx`;
  fileWrite(componentStoriesPath, componentStoriesGen(templateParams));
  runPrettier(componentStoriesPath);

  fileWrite(`${componentPath}/README.md`, componentReadmeGen(templateParams));
}
