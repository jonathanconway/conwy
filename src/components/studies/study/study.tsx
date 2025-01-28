import { Stack } from "@/components/stack";
import { Study as Study_, isNotNil } from "@/framework/client";

import { ContentListItem } from "../../content-list";
import { Heading } from "../../heading";
import { Link } from "../../link";
import { List } from "../../list";
import { Text, TextSizes } from "../../text";
import { TextTypes } from "../../text/text-type";

import * as styles from "./study.css";

interface StudyProps {
  readonly study: Study_;
}

export function Study({
  study: {
    title,
    mainUrl,
    credential,
    type,
    institution,
    date,
    description,
    mark,
    links,
  },
}: StudyProps) {
  const details = [credential, mark, institution, type, date]
    .filter(isNotNil)
    .join(" • ");

  return (
    <ContentListItem
      mainSlot={
        <>
          <Heading level={5}>
            {mainUrl ? (
              <Link href={mainUrl} target="_blank">
                {title}
              </Link>
            ) : (
              title
            )}
          </Heading>

          <Text type={TextTypes.Small}>{details}</Text>

          {Boolean(links?.length) && (
            <List className={styles.linksList}>
              {links?.map(({ url, title }) => (
                <li>
                  <Link
                    className={styles.linksListItem}
                    href={url}
                    size={TextSizes.xs}
                    target="_blank"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </List>
          )}

          {description && <Text>{description}</Text>}
        </>
      }
    />
  );
}
