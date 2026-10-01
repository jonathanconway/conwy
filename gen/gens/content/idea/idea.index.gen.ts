import { IdeaGenTemplateParams } from "./idea.params";

export const ideaIndexGen = ({ name, nameRootObject }: IdeaGenTemplateParams) =>
  `

import { ContentTypes, Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Idea = {
  type: ContentTypes.Idea,
  slug: "${name}",
  meta,
  blurb: <Blurb />,
  content: <Content />,
};

export * from "./${name}";

`.trim();
