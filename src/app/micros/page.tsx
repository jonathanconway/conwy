import { MdxContainer, MicrosList, PageLayout } from "@/components";
import { microsFragment, site } from "@/content";
import * as microsMap from "@/content/micros";

export default function Page() {
  const micros = Object.values(microsMap);

  return (
    <PageLayout
      selectedNavPath="/micros"
      main={
        <>
          <MdxContainer>{microsFragment.content}</MdxContainer>

          <MicrosList micros={micros} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - micros`,
};
