import { TypeOfConst } from "../../utils";

export const ToolSections = {
  App: "app",
  MobileApp: "mobile-app",
  CommandLineTool: "command-line-tool",
  Website: "website",
  BrowserExtension: "browser-extension",
  Belonging: "belonging",
  Misc: "misc",
} as const;

export type ToolSection = TypeOfConst<typeof ToolSections>;
