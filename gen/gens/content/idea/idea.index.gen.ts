import { IdeaGenTemplateParams } from "./idea.params";

export const ideaIndexGen = ({ name, nameRootObject }: IdeaGenTemplateParams) =>
  `

import { Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Idea = {
  type: "idea",
  slug: "${name}",
  meta,
  blurb: <Blurb />,
  content: <Content />,
};

export * from "./${name}";

`.trim();
