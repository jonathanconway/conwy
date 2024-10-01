import { Page } from "./page";

export function getPageMetas(pages: Record<string, Page>) {
  return Object.values(pages).map((page) => page.meta);
}
