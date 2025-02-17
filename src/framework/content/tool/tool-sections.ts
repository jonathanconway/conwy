import { TypeOfConst } from "../../utils";

export const ToolSections = {
  App: "app",
  Mobile: "mobile",
  CommandLine: "command-line",
  Website: "website",
  BrowserExtension: "browser-extension",
} as const;

export type ToolSection = TypeOfConst<typeof ToolSections>;
