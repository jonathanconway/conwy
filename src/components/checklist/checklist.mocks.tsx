import { sentenceCase } from "@/framework";

import { Link } from "../link";

import {
  ChecklistProps,
  ChecklistPropsSectionItemTag,
} from "./checklist-props";

export function createChecklistPropsMock(): ChecklistProps {
  return {
    filterGroups: [],
    sections: [
      {
        title: "Heading 1",
        level: 3,
        items: [
          {
            name: "checklist-item-1",
            title: "Checklist item 1",
            details: "Checklist details 1",
            tags: [
              createChecklistTagMock("tagGroup1", "tagName1"),
              createChecklistTagMock("tagGroup1", "tagName2"),
            ],
            links: [
              <Link key="link-1" href="http://article.com">
                Article: Test
              </Link>,
            ],
          },
        ],
        subSections: [],
      },
    ],
  };
}

function createChecklistTagMock(
  tagGroupName: string,
  name: string,
): ChecklistPropsSectionItemTag {
  return {
    tagGroup: {
      name: tagGroupName,
      tags: [],
      title: sentenceCase(tagGroupName),
    },
    tag: {
      name,
      tagGroupName,
      title: sentenceCase(name),
    },
  };
}
