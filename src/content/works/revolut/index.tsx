import { Work } from "@/framework/client";

import BlurbLong from "./blurb-long.mdx";
import BlurbShort from "./blurb-short.mdx";
import { meta } from "./meta";

export const revolutWork = {
  meta,
  blurbLong: <BlurbLong />,
  blurbShort: <BlurbShort />,
} as Work;
