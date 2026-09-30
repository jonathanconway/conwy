import { Checklist, ContentTypes } from "@/framework/client";

import Content from "./content.mdx";
import Endnotes from "./endnotes.mdx";
import { meta } from "./meta";
import Startnotes from "./startnotes.mdx";

export const presentationsChecklist: Checklist = {
  type: ContentTypes.Checklist,
  meta,
  startnotes: <Startnotes />,
  content: <Content />,
  endnotes: <Endnotes />,
};
