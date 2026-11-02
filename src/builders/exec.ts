import { chain, startCase } from "lodash";

import { buildersRunOnStart } from "./builders-run-on-start";
import * as builders from "./index";
import { Orders } from "./orders";

function generateBuilderCLIName(builderFnName: string) {
  return chain(builderFnName).kebabCase().replace("-builder", "").value();
}

const buildersByCLIName = chain(Object.entries(builders))
  .map(([builderFnName, builderFn]) => [
    generateBuilderCLIName(builderFnName),
    builderFn,
  ])
  .fromPairs()
  .value();

const [all, orderPre, orderPost] = [
  process.argv.includes("--all"),
  process.argv.includes("--order=pre"),
  process.argv.includes("--order=post"),
];

if (all || orderPre) {
  buildersRunOnStart[Orders.Pre].forEach((builder) => {
    const builderName = generateBuilderCLIName(builder.name);
    console.log(`Running ${startCase(builderName)} build`);
    builder();
  });
}

if (all || orderPost) {
  buildersRunOnStart[Orders.Post].forEach((builder) => {
    const builderName = generateBuilderCLIName(builder.name);
    console.log(`Running ${startCase(builderName)} build`);
    builder();
  });
}

// Only run specific build
if (!all && !orderPre && !orderPost) {
  const builderName = process.argv[2];
  console.log(`Running ${startCase(builderName)} build`);
  buildersByCLIName[builderName]();
}
