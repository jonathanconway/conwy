import { startCase } from "lodash";

import { ItemMeta } from "@/framework";

import { Icon, IconTypes } from "../../icon";
import { Label, LabelSizes } from "../../label";
import { LinkBox } from "../../link-box";
import { Stack, StackDirections, StackDistributions } from "../../stack";
import { ItemMainImage } from "../item-main-image";

import * as styles from "./item-nav.css";
import { useItemNav } from "./use-item-nav.hook";

interface ItemNavProps<TMeta extends ItemMeta> {
  readonly itemMetas: readonly TMeta[];
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function ItemNav<TMeta extends ItemMeta>(props: ItemNavProps<TMeta>) {
  const { itemMetasNavsPreviousNext } = useItemNav(props);
  return (
    <div className={styles.navsContainer}>
      {itemMetasNavsPreviousNext.map(({ type, itemMeta }) =>
        itemMeta ? (
          <LinkBox key={type} href={itemMeta.slug}>
            <div className={styles.mainColumn}>
              <Label as="div" size={LabelSizes.Small}>
                <Stack
                  direction={StackDirections.Row}
                  distribution={StackDistributions.Flow}
                  gap={0.25}
                >
                  {type === "back" && (
                    <Icon icon={IconTypes.ArrowChevronLeft} size="0.75rem" />
                  )}

                  <span>{startCase(type)}</span>

                  {type === "next" && (
                    <Icon icon={IconTypes.ArrowChevronRight} size="0.75rem" />
                  )}
                </Stack>
              </Label>

              <div className={styles.title}>
                {String(itemMeta[props.titleKey])}
              </div>
            </div>

            <div className={styles.asideColumn}>
              <ItemMainImage itemMeta={itemMeta} titleKey={props.titleKey} />
            </div>
          </LinkBox>
        ) : (
          <div key={type} className={styles.containerEmpty}></div>
        ),
      )}
    </div>
  );
}
