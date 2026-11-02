import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

import {
  checklistsRoute,
  createChecklistsChecklistItemRoute,
  createChecklistsChecklistRoute,
} from "@/app/routes";
import { Checklist, ChecklistItem as ChecklistItem_ } from "@/framework";
import { mdxComponents } from "@/mdx-components-base";

import { MdxContainer } from "../../../mdx";
import { Page } from "../../../page";
import { ResponsiveMdHalf } from "../../../responsive";
import { ChecklistContext } from "../../checklist-context";

import { ChecklistItemPageSubHeader } from "./checklist-item-page-subheader";

interface ChecklistItemPageProps {
  readonly checklist: Checklist;
  readonly checklistItem: ChecklistItem_;
}

export async function ChecklistItemPage(props: ChecklistItemPageProps) {
  const section =
    props.checklist.meta.extensions?.sectionsByHeadingText[
      props.checklistItem.sectionName
    ];
  const sectionContentMd = section?.contentMd ?? "";
  const sectionNoteMd = section?.noteMd ?? "";

  const listItemContentMd = props.checklistItem.contentMd;

  const contentMd = `
    ${sectionContentMd}
    
    ${listItemContentMd}

    ${sectionNoteMd}
  `.trim();

  const compiledMdx = await compile(contentMd, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  });

  const { default: MDXContent } = await run(compiledMdx, {
    ...runtime,
  });

  const checklistRoute = createChecklistsChecklistRoute(props.checklist);
  const checklistItemRoute = createChecklistsChecklistItemRoute(
    props.checklist,
    props.checklistItem,
  );

  return (
    <Page
      breadcrumbSegments={[
        checklistsRoute,
        checklistRoute,
        { title: checklistItemRoute.title },
      ]}
      title={checklistItemRoute.title}
      subHeaderSlot={
        <ChecklistItemPageSubHeader
          checklist={props.checklist}
          checklistItem={props.checklistItem}
        />
      }
    >
      <ChecklistContext checklistMeta={props.checklist.meta} isSingleItemView>
        <ResponsiveMdHalf>
          <MdxContainer>
            <MDXContent components={mdxComponents} />
          </MdxContainer>
        </ResponsiveMdHalf>
      </ChecklistContext>
    </Page>
  );
}
