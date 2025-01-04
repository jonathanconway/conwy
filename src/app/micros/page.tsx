import { MicrosList, PageLayout } from "@/components";
import { site } from "@/content";
import * as micros from "@/content/micros";

export default function Page() {
  const microMetas = Object.values(micros).map((micro) => micro.meta);

  return <PageLayout main={<MicrosList microMetas={microMetas} />} />;
}

export const metadata = {
  title: `${site.title} - micros`,
};
