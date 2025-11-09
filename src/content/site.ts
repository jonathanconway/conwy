import { packageInfo } from "@/package-info";

export const site = {
  title: packageInfo.name,
  owner: packageInfo.author.name,
  url: packageInfo.homepage,
  sourceUrl: packageInfo.repository.url,
  copyrightYear: 2024,
};
