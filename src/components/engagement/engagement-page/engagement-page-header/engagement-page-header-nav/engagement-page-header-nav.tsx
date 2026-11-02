import { startCase } from "lodash";

import { Engagement } from "@/framework";

import { Icon, IconTypes } from "../../../../icon";
import { Label, LabelSizes } from "../../../../label";
import { LinkBox } from "../../../../link-box";
import { Stack, StackDirections, StackDistributions } from "../../../../stack";
import { EngagementPageHeaderMainImage } from "../engagement-page-header-main-image";

import * as styles from "./engagement-page-header-nav.css";
import {
  BackNextNavDirections,
  useEngagementPageHeaderNav,
} from "./use-engagement-page-header-nav.hook";

interface EngagementPageHeaderNavProps {
  readonly engagement: Engagement;
  readonly engagements: readonly Engagement[];
}

export function EngagementPageHeaderNav(props: EngagementPageHeaderNavProps) {
  const { engagementsBackNext } = useEngagementPageHeaderNav(props);

  return (
    <div className={styles.navsContainer}>
      {engagementsBackNext.map((engagementBackNext) =>
        engagementBackNext.engagement ? (
          <LinkBox
            key={engagementBackNext.engagement.type}
            href={engagementBackNext.engagement.meta.slug}
          >
            <div className={styles.mainColumn}>
              <Label as="div" size={LabelSizes.Small}>
                <Stack
                  direction={StackDirections.Row}
                  distribution={StackDistributions.Flow}
                  gap={0.25}
                >
                  {engagementBackNext.direction ===
                    BackNextNavDirections.Back && (
                    <Icon icon={IconTypes.ArrowChevronLeft} size="0.75rem" />
                  )}

                  <span>{startCase(engagementBackNext.direction)}</span>

                  {engagementBackNext.direction ===
                    BackNextNavDirections.Next && (
                    <Icon icon={IconTypes.ArrowChevronRight} size="0.75rem" />
                  )}
                </Stack>
              </Label>

              <div className={styles.title}>
                {engagementBackNext.engagement.meta.title}
              </div>
            </div>

            <div className={styles.asideColumn}>
              <EngagementPageHeaderMainImage
                engagement={engagementBackNext.engagement}
              />
            </div>
          </LinkBox>
        ) : (
          <div
            key={engagementBackNext.direction}
            className={styles.containerEmpty}
          ></div>
        ),
      )}
    </div>
  );
}
