import { chain, startCase } from "lodash";

import { builderOrders } from "./builder-orders";
import * as builders from "./index";
import { Orders } from "./orders";

function generateBuilderCLIName(builderFnName: string) {
  return chain(builderFnName).kebabCase().replace("build-", "").value();
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

switch (true) {
  case all && orderPre: {
    builderOrders[Orders.Pre].forEach((builder) => {
      const builderName = generateBuilderCLIName(builder.name);
      console.log(`Running ${startCase(builderName)} build`);
      builder();
    });
  }

  case all && orderPost: {
    builderOrders[Orders.Post].forEach((builder) => {
      const builderName = generateBuilderCLIName(builder.name);
      console.log(`Running ${startCase(builderName)} build`);
      builder();
    });
  }

  case all && !orderPre && !orderPost: {
    Object.entries(buildersByCLIName).forEach(([builderName, builder]) => {
      console.log(`Running ${startCase(builderName)} build`);

      builder();
    });
    break;
  }

  default: {
    const builderName = process.argv[2];
    console.log(`Running ${startCase(builderName)} build`);
    buildersByCLIName[builderName]();
  }
}
