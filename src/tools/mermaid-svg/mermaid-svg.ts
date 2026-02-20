import { execSync } from "child_process";
import {
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "fs";
import { JSDOM } from "jsdom";
import { marked } from "marked";
import { join } from "path";

import { generateHash } from "@/framework";
import { getFolderFileTree } from "@/framework/server-utils";

const contentPath = join(__dirname, "../../content");
const imagesPath = join(__dirname, "../../../public/images");

export function toolMermaidSvg() {
  const foldersFiles = getFolderFileTree(contentPath);
  const foldersFilesMdx = foldersFiles.filter((folderFile) =>
    folderFile.endsWith(".mdx"),
  );

  for (const folderFileMdx of foldersFilesMdx) {
    toolMermaidSvgForContentMdx(folderFileMdx);
  }
}

function toolMermaidSvgForContentMdx(folderFileMdx: string) {
  const mdxContents = readFileSync(folderFileMdx).toString();

  const mdxContentsHtml = marked(mdxContents);

  const jsDom = new JSDOM(`<!DOCTYPE html>${mdxContentsHtml}`);

  const codeEls = Array.from(
    jsDom.window.document.querySelectorAll("code.language-mermaid--svg"),
  );
  const mermaidBlocks = codeEls.map((codeEl) => codeEl.textContent);

  const pathParts = folderFileMdx.split("/").slice(0, -1);
  const pathPartContentIndex = pathParts.indexOf("content");
  const pathRelativeContent = pathParts
    .slice(pathPartContentIndex + 1)
    .join("/");

  const imagePath = join(imagesPath, pathRelativeContent);

  clearMermaidMdsAndSvgs(imagesPath);

  for (const mermaidBlock of mermaidBlocks) {
    toolMermaidSvgForContentMdxMermaidBlock(imagePath, mermaidBlock);
  }
}

function clearMermaidMdsAndSvgs(imagesPath: string) {
  for (const imagePathFile of readdirSync(imagesPath)) {
    if (
      (imagePathFile.startsWith("mermaid-") &&
        imagePathFile.endsWith(".svg")) ||
      imagePathFile.endsWith(".md")
    ) {
      rmSync(join(imagesPath, imagePathFile));
    }
  }
}

function toolMermaidSvgForContentMdxMermaidBlock(
  imagePath: string,
  mermaidBlock: string,
) {
  const hash = generateHash(mermaidBlock.trim());

  const mdFilename = `mermaid-${hash}.md`;
  const svgFilename = `mermaid-${hash}.svg`;
  const svgVariantFilename = `mermaid-${hash}-1.svg`;

  const mdImagePathFilename = join(imagePath, mdFilename);
  const svgImagePathFilename = join(imagePath, svgFilename);
  const svgVariantImagePathFilename = join(imagePath, svgVariantFilename);

  console.log(`Checking ${svgImagePathFilename}.`);
  if (existsSync(svgImagePathFilename)) {
    console.log(`${svgImagePathFilename} exists.`);
    return;
  }

  console.log(`Checking ${svgVariantImagePathFilename}.`);
  if (existsSync(svgVariantImagePathFilename)) {
    console.log(`${svgVariantImagePathFilename} exists.`);
    return;
  }

  const exportMd = `\`\`\`mermaid\n${mermaidBlock}\n\`\`\``;

  writeFileSync(mdImagePathFilename, exportMd);

  const cmd = `npx mmdc -i "${mdImagePathFilename}" -o "${svgImagePathFilename}" && rm ${mdImagePathFilename}`;
  execSync(cmd);

  console.log(`✅ Generated ${svgVariantImagePathFilename}.`);
}
