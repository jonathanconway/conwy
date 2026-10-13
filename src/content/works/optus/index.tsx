import { Work } from "@/framework";

import BlurbLong from "./blurb-long.mdx";
import BlurbShort from "./blurb-short.mdx";
import { meta } from "./meta";

export const optusWork = {
  meta,
  blurbLong: <BlurbLong />,
  blurbShort: <BlurbShort />,
} as Work;
