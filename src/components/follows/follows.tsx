import follows from "@/content/pages/follows/follows.json";

import { SectionHeading } from "../heading";
import { Link } from "../link";
import { ListUnordered } from "../list";
import { ListItem } from "../list/list-item";

export function Follows() {
  const followsEntries = Object.entries(follows);

  return (
    <>
      {followsEntries.map(([section, items]) => (
        <div key={section}>
          <SectionHeading>{section}</SectionHeading>

          <ListUnordered>
            {items.map((item) => (
              <ListItem key={item.url}>
                <Link key={item.url} link={item} />
              </ListItem>
            ))}
          </ListUnordered>
        </div>
      ))}
    </>
  );
}
