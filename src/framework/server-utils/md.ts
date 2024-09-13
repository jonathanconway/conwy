import { JSDOM } from "jsdom";
import { marked } from "marked";

export function convertMdxToMd(mdx: string) {
  mdx = mdx
    .split("\n")
    .filter((line) => !line.trim().startsWith("import "))
    .join("\n");

  mdx =
    new JSDOM(
      `<!DOCTYPE html>${mdx}`,
    ).window.document.body.textContent?.toString() ?? "";

  mdx = mdx.replace(new RegExp(/{(.*?)}/, "gs"), "");

  return mdx;
}

export async function convertMdToHTML(md: string) {
  return marked(md);
}
