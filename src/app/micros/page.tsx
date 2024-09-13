import { PageLayout } from "@/components";
import { site } from "@/content";
import * as micros from "@/content/micros";

import { MicrosList } from "../../components";

export default function Page() {
  const microMetas = Object.values(micros).map((micro) => micro.meta);

  return (
    <PageLayout
      selectedNavPath="/micros"
      main={
        <>
          <MicrosList microMetas={microMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - micros`,
};
