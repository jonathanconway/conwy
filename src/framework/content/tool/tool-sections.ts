import { TypeOfConst } from "../../utils";

export const ToolSections = {
  App: "app",
  Mobile: "mobile",
  CommandLine: "command-line",
  Website: "website",
  BrowserExtension: "browser-extension",
  Belonging: "belonging",
} as const;

export type ToolSection = TypeOfConst<typeof ToolSections>;
