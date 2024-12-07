import { TypeOfConst } from "@/framework/utils";

export const ToolSections = {
  App: "app",
  CommandLine: "command-line",
  Website: "website",
} as const;

export type ToolSection = TypeOfConst<typeof ToolSections>;
