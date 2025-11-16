import { Tool, ToolSections } from "@/framework/client";

export const imagemagickTool: Tool = {
  section: ToolSections.CommandLineTool,
  slug: "imagemagick",
  title: "ImageMagick",
  category: "Image Converter",
  date: "2024-12-06",
  operatingSystems: ["MacOS"],
  url: "https://imagemagick.org/script/index.php",
  description:
    "Used for editing and manipulating digital images. It can be used to create, edit, compose, or convert bitmap images, and supports a wide range of file formats, including JPEG, PNG, GIF, TIFF, and Ultra HDR.",
  mainImage: "/images/tools/terminal.png",
};
