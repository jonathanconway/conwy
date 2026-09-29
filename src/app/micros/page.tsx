import { orderBy } from "lodash";

import { MdxContainer, MicrosList, PageLayout } from "@/components";
import { microsFragment, site } from "@/content";
import * as microsMap from "@/content/micros";

export default function Page() {
  const micros = Object.values(microsMap);

  const microsSorted = orderBy(micros, "meta.createdDate", "desc");

  return (
    <PageLayout
      selectedNavPath="/micros"
      main={
        <>
          <MdxContainer>{microsFragment.content}</MdxContainer>

          <MicrosList micros={microsSorted} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - micros`,
};
