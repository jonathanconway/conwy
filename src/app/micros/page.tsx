import { MicrosList, PageLayout } from "@/components";
import { site } from "@/content";
import * as microsMap from "@/content/micros";

export default function Page() {
  const micros = Object.values(microsMap);

  return <PageLayout main={<MicrosList micros={micros} />} />;
}

export const metadata = {
  title: `${site.title} - micros`,
};
