import { IdeaGenTemplateParams } from "./idea-gen-template-params";

export const ideaIndexGen = ({ nameRootObject }: IdeaGenTemplateParams) =>
  `

import { ContentTypes, Idea } from "@/framework/client";

import Blurb from "./blurb.mdx";
import Content from "./content.mdx";
import { meta } from "./meta";

export const ${nameRootObject}: Idea = {
  type: ContentTypes.Idea,
  meta,
  blurb: <Blurb />,
  content: <Content />,
};


`.trim();
