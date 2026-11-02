import { ReactNode } from "react";

import { Engagement } from "@/framework";

import { Heading, HeadingLevels } from "../../../heading";
import { Text, TextTypes } from "../../../text";

import { EngagementPageHeaderMainImage } from "./engagement-page-header-main-image";
import { EngagementPageHeaderNav } from "./engagement-page-header-nav";
import * as styles from "./engagement-page-header.css";

interface EngagementPageHeaderProps {
  readonly engagement: Engagement;
  readonly engagements: readonly Engagement[];
  readonly subtitleSlot?: ReactNode;
}

export function EngagementPageHeader(props: EngagementPageHeaderProps) {
  const { engagement, engagements, subtitleSlot } = props;
  const { meta } = engagement;

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftImage}>
          <EngagementPageHeaderMainImage engagement={engagement} />
        </div>

        <div className={styles.headerLeftTitle}>
          <Heading level={HeadingLevels.Level2}>{meta.title}</Heading>

          {subtitleSlot && (
            <Text type={TextTypes.SubTitle}>{subtitleSlot}</Text>
          )}
        </div>
      </div>

      <div className={styles.headerRight}>
        <EngagementPageHeaderNav
          engagement={engagement}
          engagements={engagements}
        />
      </div>
    </div>
  );
}
