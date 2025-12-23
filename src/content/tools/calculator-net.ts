import { Tool, ToolSections } from "@/framework/client";

export const calculatorNetTool: Tool = {
  type: "tool",
  meta: {
    section: ToolSections.Website,
    slug: "calculator-net",
    title: "Calculator.net",
    category: "Converters",
    date: "2025-02-10",
    operatingSystems: ["Web"],
    url: "https://www.calculator.net",
    description: "Free Online Calculators and Converters",
    mainImage: "/images/tools/calculator-net.png",
  },
};
