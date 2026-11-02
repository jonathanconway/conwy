import { orderBy } from "lodash";

import { MicrosPage } from "@/components";
import { site } from "@/content";
import * as microsMap from "@/content/micros";

export default function MicrosPage_() {
  const micros = Object.values(microsMap);
  const microsSorted = orderBy(micros, "meta.createdDate", "desc");

  return <MicrosPage micros={microsSorted} />;
}

export const metadata = {
  title: `${site.title} - micros`,
};
