import { Checklist } from "@/framework/client";

import Content from "./content.mdx";
import Endnotes from "./endnotes.mdx";
import { meta } from "./meta";

export const frontEndDevelopmentChecklist: Checklist = {
  type: "checklist",
  meta,
  content: <Content />,
  endnotes: <Endnotes />,
};
