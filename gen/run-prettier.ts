import { readFile, readFileSync, writeFile } from "fs";
import prettier from "prettier";
import { cwd } from "process";

const prettierConfig = JSON.parse(
  readFileSync(`${cwd()}/.prettierrc`).toString(),
);

export async function runPrettier(sourcePath: string) {
  return new Promise<void>((res) => {
    readFile(sourcePath, async (_, sourceBefore) => {
      const sourceAfter = await prettier.format(sourceBefore.toString(), {
        ...prettierConfig,
        parser: "typescript",
      });

      writeFile(sourcePath, sourceAfter, () => {
        res();
      });
    });
  });
}
