import follows from "@/content/pages/follows/follows.json";

import { SectionHeading } from "../heading";
import { Link } from "../link";

export function Follows() {
  const followsEntries = Object.entries(follows);

  return (
    <>
      {followsEntries.map(([section, items]) => (
        <div key={section}>
          <SectionHeading>{section}</SectionHeading>

          <ul>
            {items.map((item) => (
              <li key={item.url}>
                <Link key={item.url} link={item} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
