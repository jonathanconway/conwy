import { scanTailwindJSClasses } from "@jonathanconway/tailwindjs/build";

export function buildTailwindJSClasses() {
  const srcPath = `${__dirname}/../..`;

  console.log(`Building TailwindJS classes from ${srcPath}...`);

  scanTailwindJSClasses(srcPath);

  console.log(`Building TailwindJS classes from ${srcPath} - done.`);
}
