import { Link } from "../link";

import { ChecklistProps } from "./checklist-props";

export function createChecklistPropsMock(): ChecklistProps {
  return {
    filterGroups: [],
    sections: [
      {
        title: "Heading 1",
        level: 3,
        items: [
          {
            title: "Checklist item 1",
            details: "Checklist details 1",
            tags: [
              {
                group: "group-1",
                tag: "tag-1",
              },
              {
                group: "group-1",
                tag: "tag-2",
              },
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
