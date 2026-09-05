import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

import { Checklist, ChecklistItem as ChecklistItem_ } from "@/framework/client";
import { useMDXComponents } from "@/mdx-components";
import { mdxComponents } from "@/mdx-components-base";

import { MainAsideLayout } from "../../../layouts";
import { MdxContainer } from "../../../mdx";
import { ChecklistContext } from "../../checklist-context";

import { ChecklistItemPageHeader } from "./checklist-item-page-header";

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
    // useMDXComponents,
  });

  return (
    <MainAsideLayout
      main={
        <ChecklistContext checklistMeta={props.checklist.meta} isSingleItemView>
          <ChecklistItemPageHeader
            checklist={props.checklist}
            checklistItem={props.checklistItem}
          />
          <MdxContainer>
            <MDXContent components={mdxComponents} />
          </MdxContainer>
        </ChecklistContext>
      }
    />
  );
}
