import * as gens from "./gens";

const args = process.argv.splice(
  process.argv.findIndex((arg) => arg.endsWith("gen.ts")) + 1,
);

const argsMap = Object.fromEntries(
  args
    .filter((arg) => arg.startsWith("--"))
    .map((arg) => {
      const [first, second] = arg.split("=");
      const name = first.replace("--", "");
      const value = JSON.parse(`"${second}"`);
      return [name, value];
    }),
);

const genName = args[0];

const gensMap = gens as Record<string, Function>;

gensMap[genName](argsMap);
