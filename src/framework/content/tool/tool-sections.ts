import { TypeOfConst } from "../../utils";

export const ToolSections = {
  App: "app",
  CommandLine: "command-line",
  Website: "website",
} as const;

export type ToolSection = TypeOfConst<typeof ToolSections>;
