import { chain, startCase } from "lodash";

import * as tools from "./index";

function generateToolCLIName(toolFnName: string) {
  return chain(toolFnName).kebabCase().replace("tool-", "");
}

const toolsByCLIName = chain(Object.entries(tools))
  .map(([toolFnName, toolFn]) => [generateToolCLIName(toolFnName), toolFn])
  .fromPairs()
  .value();

if (process.argv.includes("--all")) {
  Object.entries(toolsByCLIName).forEach(([toolName, tool]) => {
    console.log(`Running ${startCase(toolName)} tool`);

    tool();
  });
} else {
  const toolName = process.argv[2];
  console.log(`Running ${startCase(toolName)} tool`);
  toolsByCLIName[toolName]();
}
