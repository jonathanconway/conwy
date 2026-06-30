import { Checklist } from "@/framework/client";

import Content from "./content.mdx";
import Endnotes from "./endnotes.mdx";
import { meta } from "./meta";
import Startnotes from "./startnotes.mdx";

export const frontEndDevelopmentChecklist: Checklist = {
  type: "checklist",
  meta,
  startnotes: <Startnotes />,
  content: <Content />,
  endnotes: <Endnotes />,
};
