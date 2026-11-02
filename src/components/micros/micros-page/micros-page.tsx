import { microsRoute } from "@/app/routes";
import { microsFragment } from "@/content";
import { Micro } from "@/framework";

import { MdxContainer } from "../../mdx";
import { Page } from "../../page";
import { ResponsiveMdHalf } from "../../responsive";

import { MicrosPageList } from "./micros-page-list";

interface MicrosPageProps {
  readonly micros: readonly Micro[];
}

export function MicrosPage(props: MicrosPageProps) {
  return (
    <Page title={microsRoute.title}>
      <ResponsiveMdHalf>
        <MdxContainer>{microsFragment.content}</MdxContainer>
      </ResponsiveMdHalf>

      <ResponsiveMdHalf>
        <MicrosPageList micros={props.micros} />
      </ResponsiveMdHalf>
    </Page>
  );
}
