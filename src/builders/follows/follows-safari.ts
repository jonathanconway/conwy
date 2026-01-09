import { CheerioAPI, load as cheerioLoad } from "cheerio";
import { type Element } from "domhandler";
import { readFileSync } from "fs";
import { join } from "path";

import { deepMergeMapsOfArrays } from "@/framework";

import { FollowsBySection } from "./follows.types";

export async function getSafariFollowsBySection(): Promise<FollowsBySection> {
  let followsBySection: FollowsBySection = {};

  const safariExportPath = join(
    __dirname,
    "../../../public/downloads/pages/follows/SafariExportBookmarks.html",
  );
  const safariExportContents = readFileSync(safariExportPath).toString();
  const $ = cheerioLoad(safariExportContents);

  const blogsSections = $("h3:contains('Blogs')").next().children("h3");
  for (
    let blogsSectionIndex = 0;
    blogsSectionIndex < blogsSections.length;
    blogsSectionIndex++
  ) {
    const blogsSection = blogsSections[blogsSectionIndex];
    followsBySection = deepMergeMapsOfArrays([
      followsBySection,
      parseSafariBookmarksSection($, blogsSection),
    ]) as FollowsBySection;
  }

  return followsBySection;
}

function parseSafariBookmarksSection(
  $: CheerioAPI,
  sectionH3: Element,
  parentHeading = "",
) {
  let followsBySection: FollowsBySection = {};

  const $sectionH3 = $(sectionH3);

  const sectionHeading = $sectionH3.text();
  const sectionHeadingFullPath = [parentHeading, sectionHeading]
    .filter(Boolean)
    .join(" / ");

  const links = $sectionH3.next().children("a");
  for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
    const link = $(links[linkIndex]);

    const item = {
      title: link.text().trim(),
      url: link.attr("href")?.toString() ?? "",
    };

    followsBySection[sectionHeadingFullPath] =
      followsBySection[sectionHeadingFullPath] ?? [];
    followsBySection[sectionHeadingFullPath].push(item);
  }

  const nestedSections = $sectionH3.next().children("h3");
  for (
    let nestedSectionIndex = 0;
    nestedSectionIndex < nestedSections.length;
    nestedSectionIndex++
  ) {
    const nestedSection = nestedSections[nestedSectionIndex];
    const nestedFollowsBySection = parseSafariBookmarksSection(
      $,
      nestedSection,
      sectionHeadingFullPath,
    );
    followsBySection = deepMergeMapsOfArrays([
      followsBySection,
      nestedFollowsBySection,
    ]) as FollowsBySection;
  }

  return followsBySection;
}
