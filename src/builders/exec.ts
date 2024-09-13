import { chain, startCase } from "lodash";

import * as builders from "./index";

function generateBuilderCLIName(builderFnName: string) {
  return chain(builderFnName).kebabCase().replace("build-", "");
}

const builderNames = chain(Object.entries(builders))
  .map(([builderFnName, builderFn]) => [
    generateBuilderCLIName(builderFnName),
    builderFn,
  ])
  .fromPairs()
  .value();

if (process.argv.includes("--all")) {
  Object.entries(builderNames).forEach(([builderName, builder]) => {
    console.log(`Running ${startCase(builderName)} build`);

    builder();
  });
} else {
  const builderName = process.argv[2];
  console.log(`Running ${startCase(builderName)} build`);
  builderNames[builderName]();
}
